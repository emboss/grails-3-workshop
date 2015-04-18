package messages.auth

import grails.core.GrailsApplication
import grails.core.support.GrailsApplicationAware
import org.apache.commons.logging.Log
import org.apache.commons.logging.LogFactory
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.builders.WebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

/**
 *
 * @author <a href="mailto:Martin.Bosslet@gmail.com">Martin Bosslet</a>
 */
class AuthenticationManager extends WebSecurityConfigurerAdapter implements GrailsApplicationAware {

    GrailsApplication grailsApplication

    private final Log LOG = LogFactory.getLog(AuthenticationManager)

    @Override
    public void configure(WebSecurity web) throws Exception {
        web
            .ignoring()
            .antMatchers("/assets/**")
    }

    @Override
    protected void configure(HttpSecurity http) {
        LOG.info('Initializing Spring security')

        http.authorizeRequests()
              .antMatchers(
                "/",
                "/login",
                "/signup/**"
              ).permitAll()
              .antMatchers(
                "/**"
              ).fullyAuthenticated()
              .and()
            .formLogin()
              .loginPage("/login")
              .loginProcessingUrl("/login")
              .failureUrl("/login?failed=true")
              .usernameParameter("email")
              .passwordParameter("password")
              .permitAll()
              .and()
            .logout()
              .logoutUrl("/logout")
              .logoutSuccessUrl("/")
              .permitAll()
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        def userService = grailsApplication.mainContext.getBean("userService")

        auth
            .userDetailsService(new CurrentUserService(userService: userService))
            .passwordEncoder(new BCryptPasswordEncoder());
    }
}
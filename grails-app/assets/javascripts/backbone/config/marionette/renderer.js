Backbone.Marionette.Renderer.render = function(template, data) {
  if (typeof(template) === "function") {
    return template(data);
  }

  if (!Handlebars.templates[template]) throw "Template '" + template + "' not found!";
  return Handlebars.templates[template](data);
};
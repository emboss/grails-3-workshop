<tr>
  <td class="title">
    <g:link action="show" id="${it.id}">
      ${it.title}
    </g:link>
  </td>
  <td class="from">${it.from.email}</td>
  <td class="date"><g:formatDate format="yyyy-MM-dd HH:mm" date="${it.dateCreated}"/></td>
  <td class="message-actions">
    <g:csrfForm action="delete" id="${it.id}" method="delete" class="delete">
      <button type="submit" class="delete">
        <i class="fa fa-trash"></i>
      </button>
    </g:csrfForm>
  </td>
</tr>
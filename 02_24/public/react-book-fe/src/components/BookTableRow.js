export default function BookTableRow(props) {

  const handleChange = async (event) => {
    props.update({finished: event.target.checked});
  };

  const handleDelete = () => {
    props.delete(props.data.id);
  };

  return (
    <tr>
      <td id="b-title">{props.data.title}</td>
      <td id="b-author">{props.data.author}</td>
      <td id="b-published-at">{props.data.published_at}</td>
      <td id="b-finished">
        <input
          type="checkbox"
          name="finished"
          id="finished"
          checked={props.data.finished}
          onChange={handleChange}
        />
      </td>
      <td>
        <input type="button" value="DELETE" onClick={handleDelete} />
      </td>
    </tr>
  );
}

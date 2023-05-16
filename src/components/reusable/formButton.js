var FormButton = props => (
    <div id="button" class="row">
      <button onClick={props.submitHandler}>{props.title}</button>
    </div>
  );
export default FormButton;
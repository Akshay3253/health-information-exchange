var FormButton = (props) => (
  <div id="button" className="row">
    <button onClick={props.submitHandler}>{props.title}</button>
  </div>
);
export default FormButton;

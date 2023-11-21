import Form from "react-bootstrap/Form";

const FormRow = ({
  type,
  name,
  labelText,
  defaultValue = "",
  accept = "",
  required,
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={name}>{labelText || name}</Form.Label>

      <Form.Control
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        required={required}
        accept={accept}
      />
    </Form.Group>
  );
};

export default FormRow;

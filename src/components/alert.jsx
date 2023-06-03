const Alert = ({ type, message }) => {
    const alertClassName = `alert alert-${type}`;
    return <div className={alertClassName}>{message}</div>;
  };
  
  export default Alert;
  
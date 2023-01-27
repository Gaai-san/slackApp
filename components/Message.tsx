type Props = {
  body: string;
};

const Message = (props: Props) => {
  return (
    <>
      <li>{props.body}</li>
    </>
  );
};

export default Message;

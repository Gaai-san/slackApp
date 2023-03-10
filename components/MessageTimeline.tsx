import * as MessageType from "@/types/Message";
import Message from "@/components/Message";

type Props = {
  messages: MessageType.Message[];
};

const MessageTimeline = (props: Props) => {
  return (
    <div>
      <ul>
        {props.messages.map((m) => {
          return <Message body={m.body}></Message>;
        })}
      </ul>
    </div>
  );
};

export default MessageTimeline;

import styles from "@/pages/channels/ChannelPage.module.css";
import MessageTimeline from "@/components/MessageTimeline";

const ChannelPage = () => {
  const ms = [
    {
      id: "1",
      body: "Hello World",
      ChannelId: "1",
      createdAt: new Date(),
    },
  ];

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <h2>Title</h2>
      </div>
      <MessageTimeline message={ms}></MessageTimeline>

      <div>SendMessages</div>
    </div>
  );
};

export default ChannelPage;

// className={styles.header-with-messages}

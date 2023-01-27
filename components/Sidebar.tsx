import styles from "./Sidebar.module.css";
import SidebarHeader from "./SidebarHeader";
import Link from "next/link";
import { useAxios } from "@/hooks/useAxios";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const channels = [
    { id: 1, title: "Channel 1" },
    { id: 2, title: "Channel 2" },
  ];

  const { axios } = useAxios();
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get("/channels.json");
      console.log(data.data[1]);
    };

    fetch();
  }, []);

  return (
    <div className={styles.body}>
      <SidebarHeader title="NextJS Slack"></SidebarHeader>
      <ul>
        {channels.map((channel) => {
          return (
            <li key={channel.id} className={styles.channelTitle}>
              <Link href={`/channels/${channel.id}`}>
                <span>{channel.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

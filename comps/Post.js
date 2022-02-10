import styles from "../styles/Post.module.css";

const Post = ({ responses }) => {
  return (
    <div>
      {responses.map((response, key) => (
        <div key={key}>
          {response.username}說：
          {response.message}
          <span className={styles.time}>於{response.time}</span>
        </div>
      ))}
    </div>
  );
};

export default Post;

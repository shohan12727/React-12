export default function Post({ post }) {
  console.log(post);
  const { title, body } = post;
  return (
    <div className="card">
      <h2>Title: {title}</h2>
      <h4
        style={{
          backgroundColor: "PapayaWhip",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        Body: {body}
      </h4>
    </div>
  );
}

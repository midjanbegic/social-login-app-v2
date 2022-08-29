const Card = ({ post }) => {
  return (
    <div
      className="card"
      onClick={() => {
        window.open(post.link, "_blank").focus();
      }}
    >
      <span className="title">{post.title}</span>
      <img src={post.img} alt="" className="img" />
      <p className="desc">{post.desc}</p>
      <button className="cardButton">Read More</button>
    </div>
  );
};

export default Card;

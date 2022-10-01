const SideIcon = () => {
  const LinkIcons = 'https://www.google.com/';
  return (
    <div className="icon-bar">
      <a href={LinkIcons}>
        <span>😍</span>
      </a>
      <a href={LinkIcons}>
        <span>😤</span>
      </a>
      <a href={LinkIcons}>
        <span>😂</span>
      </a>
      <a href={LinkIcons}>
        <span>🔥</span>
      </a>
      <a href={LinkIcons}>
        <span>👍</span>
      </a>
      <a href={LinkIcons}>
        <span>❤️</span>
      </a>
    </div>
  );
}

export default SideIcon;
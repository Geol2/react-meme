export default function Section({
  bgColor,
  color,
  title = "Component",
  children,
  onMouseEnter = (event) => {
    event.currentTarget.style.fontWeight = "900";
  },
}) {
  const sectionCss = {
    backgroundColor: bgColor,
    color,
  };

  return (
    <div style={sectionCss}>
      <div onMouseEnter={onMouseEnter}>Hover Me</div>
      {children}
      This is {title}
    </div>
  );
}

type LogoProps = { size?: number };

export default function Logo({ size = 28 }: LogoProps) {
  return (
    <span className="logo" style={{ fontSize: size }}>
      Jam<span className="three">3</span>ah
    </span>
  );
}

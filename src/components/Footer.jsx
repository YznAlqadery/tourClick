export default function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer>
      <p className="footer__text">
        &copy; Copyright {currentDate} by Yazan Alqadery.{" "}
      </p>
    </footer>
  );
}

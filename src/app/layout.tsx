export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <header>MAIN HEADER</header>
        {children}
        <footer>MAIN FOOTER</footer>
      </body>
    </html>
  );
}

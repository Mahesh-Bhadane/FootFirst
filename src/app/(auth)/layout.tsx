export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex justify-center">
      <div>{children}</div>
    </section>
  );
}

export default function WebPageWrapperLarge({ children }: any) {
  return (
    <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

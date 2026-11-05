import CalmWaitDemo from "./demos/CalmWaitDemo";
import BrandMarkCoreDemo from "./demos/BrandMarkCoreDemo";
import FormSubmittingDemo from "./demos/FormSubmittingDemo";

export default function App() {
  return (
    <main className="mx-auto grid w-full max-w-5xl gap-10 px-5 py-8">
      <CalmWaitDemo />
      <BrandMarkCoreDemo />
      <FormSubmittingDemo />
    </main>
  );
}

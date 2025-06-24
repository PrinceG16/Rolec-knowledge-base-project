import { Accordion } from "@rolec-services/rolec-ui";

export function Video() {
  return (
    <section className="max-w-[1100px] mx-auto bg-clear text-gray-900 py-10 px-6">
      <h2 className="text-2xl font-semibold mb-6">Watch and Learn</h2>
      <br></br>
      <div className="max-w-[1100px] mx-auto w-full aspect-video rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/Gzw7bo3_QoY"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

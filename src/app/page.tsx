import { HomeDoodle } from "@/components/HomeDoodle";

export default function HomePage() {
  return (
    <div className="relative flex min-h-[min(52vh,420px)] w-full items-end justify-center md:min-h-[calc(100dvh-7rem)] md:block md:items-stretch md:justify-start">
      <HomeDoodle />
    </div>
  );
}

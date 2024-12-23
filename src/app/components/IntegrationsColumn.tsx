import { twMerge } from "tailwind-merge";
import { type IntegrationsType } from "../sections/Integrations";
import Image from "next/image";

export default function IntegrationsColumn(props: {
  integrations: IntegrationsType;
  className?:string;
}) {
  const { integrations,className } = props;
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4",className)}>
      {integrations.map((integration) => (
        <div
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
          key={integration.name}
        >
          <div className="flex justify-center">
            <Image
              src={integration.icon}
              alt={integration.name}
              className="size-24 "
            />
          </div>
          <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
          <p className="text-center text-white/50 mt-2">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
}

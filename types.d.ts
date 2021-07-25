declare module "vite-plugin-sveld" {
  export default function sveld(): {
    name: string;
    transform: (
      src: string,
      id: string
    ) => Promise<{
      code: string;
      map: any;
    }>;
  };
}

declare module "*.svelte?raw&sveld" {
  interface SveldProp {
    name: string;
    kind: string;
    type: string;
    isFunction: boolean;
    isFunctionDeclaration: boolean;
    constant: boolean;
    reactive: boolean;
  }

  interface SveldSlot {
    name: string;
    default: boolean;
    fallback: string;
    slot_props: string;
  }

  interface SveldEvent {
    type: string;
    name: string;
    element: string;
  }

  interface SveldRestProps {
    type: string;
    name: string;
  }

  interface SveldTypdefs {
    type: string;
    name: string;
    ts: string;
  }

  interface SveldJson {
    props: SveldProp[];
    slots: SveldSlot[];
    events: SveldEvent[];
    typedefs: SveldTypedefs[];
    rest_props: SveldRestProps[];
  }

  const json: SveldJson;

  export default json;
}

import { useElement, useLayout, useEffect } from '@nebula.js/stardust';
import properties from './object-properties';
import extDefinition from './extDefinition'
import data from './data';
import { render } from './root';

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const el = useElement();
      const layout = useLayout();

      useEffect(() => {
        // do some heavy update
      }, [layout]);

      render(el, { layout });
    },
  };
}

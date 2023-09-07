import { useEffect, useRef } from "react";

export function fixForAttribute(attrib, el) {
  const baseUrl = window.location.href;
  const domEl = el || document;

  [].slice
    .call(domEl.querySelectorAll(`svg [${attrib}]`))
    // filter out all elements whose attribute doesn't start with `url(#`
    .filter((element) => element.getAttribute(attrib).indexOf("url(#") === 0)
    // prepend `window.location` to the attrib's url() value, in order to make it an absolute IRI
    .forEach((element) => {
      const maskId = element
        .getAttribute(attrib)
        .replace("url(", "")
        .replace(")", "");
      element.setAttribute(attrib, `url(${baseUrl + maskId})`);
    });
}


export function useSvgAttr(attr) {
  const ref = useRef();
  useEffect(() => {
    attr.forEach(a => fixForAttribute(a, ref.current));
  }, [attr]);

  return ref;
}
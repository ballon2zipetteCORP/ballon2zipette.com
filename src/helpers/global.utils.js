function triggerWhenParentFound(elementSrc, targetElement, cb) {
  if(elementSrc === targetElement)
    return cb(true, elementSrc);
  let parent = elementSrc.parentElement;
  while(parent && parent !== targetElement)
    parent = parent.parentElement;
  if(!parent || (parent && parent !== targetElement))
    return cb(false, parent);
}

export {
  triggerWhenParentFound
}

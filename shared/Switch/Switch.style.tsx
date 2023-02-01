import { styled } from "../../stitches.config";
import * as Switch from '@radix-ui/react-switch';






export const SwitchRoot = styled(Switch.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: 'Black',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px black`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { 
    backgroundColor: '$lightBlue'
 },
});

export const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px black`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { 
    transform: 'translateX(19px)'

},
});

export const Flex = styled('div', { display: 'flex' });
export const Label = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
});

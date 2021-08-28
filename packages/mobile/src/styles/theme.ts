import {extendTheme} from "native-base";

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        solid: (props) => {
          return {
            bg: props?.colorScheme === 'red' ? 'red.500' : 'black',
            _text: {
              color: 'white',
            },
            _pressed: {
              bg: props?.colorScheme === 'red' ? 'red.700' : 'dark.100'
            },
            _hover: {
              bg: props?.colorScheme === 'red' ? 'red.700' : 'dark.100'
            },
          }
        },
        outline: (props) => ({
          borderColor: props?.colorScheme === 'red' ? 'red.700' : 'black',
          bg: 'transparent',
          _text: {
            color: props?.colorScheme === 'red' ? 'red.700' : 'black'
          },
          _pressed: {
            bg: props?.colorScheme === 'red' ? 'red.100' : 'dark.700'
          }
        }),
        link: (props) => ({
          _text: {
            color: props?.colorScheme === 'red' ? 'red.700' : 'black',
          },
          _pressed: {
            bg: props?.colorScheme === 'red' ? 'red.100' : 'dark.700',
          }
        })
      },

    },
    Input: {
      baseStyle: () => {
        return {
          _hover: {
            borderColor: 'black',
          },
          _focus: {
            borderColor: 'black',
          },
          _invalid: {
            borderColor: 'red.500',
          },
          _ios: {
            _focus: {
              borderColor: 'black',
            }
          },
          _android: {
            _focus: {
              borderColor: 'black',
            }
          },
        }
      },
      variants: {
        outline: () => {
          return {
            borderColor: 'black',
          }
        }
      }
    },
    Checkbox: {
      baseStyle: {
        _checkbox: {
          _checked: {
            bg: 'black',
            borderColor: 'black',
          }
        },
        _interactionBox: {
          _pressed: {
            bg: 'gray.200'
          }
        },
        _icon: {
          color: 'white'
        }
      }
    },
    Radio: {
      baseStyle: {
        _radio: {
          _checked: {
            bg: 'black',
            borderColor: 'black',
          }
        },
        _interactionBox: {
          _pressed: {
            bg: 'gray.200'
          }
        },
        _icon: {
          color: 'white'
        }
      }
    },
  }
})

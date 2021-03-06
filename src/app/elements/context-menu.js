$(function() {
  let isRtl = $("html").attr("dir") === "rtl"

  $.contextMenu({
    selector: "#context-menu-1",
    position: (opt, x, y) => {
      let position = isRtl ? x - opt.$menu.outerWidth() : x
      opt.$menu.css({ top: y, left: position })
    },
    callback: (key, options) => {
      alert(`clicked: ${key}`)
    },
    items: {
      edit: {
        name: "Edit",
        icon: "edit"
      },
      cut: {
        name: "Cut",
        icon: "cut"
      },
      copy: {
        name: "Copy",
        icon: "copy"
      },
      paste: {
        name: "Paste",
        icon: "paste"
      },
      delete: {
        name: "Delete",
        icon: "delete"
      },
      sep1: "---------",
      quit: {
        name: "Quit",
        icon: (element, key, item) => {
          return "context-menu-icon context-menu-icon-quit"
        }
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-2",
    position: (opt, x, y) => {
      let position = isRtl ? x - opt.$menu.outerWidth() : x
      opt.$menu.css({ top: y, left: position })
    },
    callback: (key, options) => {
      alert(`clicked: ${key}`)
    },
    items: {
      edit: {
        name: "Edit",
        icon: "fa-edit"
      },
      cut: {
        name: "Beer",
        icon: "fa-beer"
      },
      copy: {
        name: "Cloud download",
        icon: "fa-cloud"
      },
      paste: {
        name: "Certificate",
        icon: "fa-certificate"
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-3",
    position: (opt, x, y) => {
      let position = isRtl ? x - opt.$menu.outerWidth() : x
      opt.$menu.css({ top: y, left: position })
    },
    callback: (key, options) => {
      alert(`clicked: ${key}`)
    },
    items: {
      edit: {
        name: "Edit",
        icon: "edit",
        accesskey: "e"
      },
      cut: {
        name: "Cut",
        icon: "cut",
        accesskey: "c"
      },
      copy: {
        name: "Copy",
        icon: "copy",
        accesskey: "c o p y"
      },
      paste: {
        name: "Paste",
        icon: "paste",
        accesskey: "p t"
      },
      delete: {
        name: "Delete",
        icon: "delete"
      },
      sep1: "---------",
      quit: {
        name: "Quit",
        icon: (element, key, item) => {
          return "context-menu-icon context-menu-icon-quit"
        }
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-4",
    position: (opt, x, y) => {
      let position = isRtl ? x - opt.$menu.outerWidth() : x
      opt.$menu.css({ top: y, left: position })
    },
    callback: (key, options) => {
      alert(`clicked: ${key}`)
    },
    items: {
      edit: {
        name: "Clickable",
        icon: "edit",
        disabled: false
      },
      cut: {
        name: "Disabled",
        icon: "cut",
        disabled: true
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-5",
    position: (opt, x, y) => {
      let position = isRtl ? x - opt.$menu.outerWidth() : x
      opt.$menu.css({ top: y, left: position })
    },
    callback: (key, options) => {
      alert(`clicked: ${key}`)
    },
    items: {
      edit: {
        name: "Closing on Click",
        icon: "edit",
        callback: () => {
          return true
        }
      },
      cut: {
        name: "Open after Click",
        icon: "cut",
        callback: () => {
          return false
        }
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-6",
    position: (opt, x, y) => {
      let position = isRtl ? x - opt.$menu.outerWidth() : x
      opt.$menu.css({ top: y, left: position })
    },
    callback: (key, options) => {
      alert(`clicked: ${key}`)
    },
    items: {
      edit: {
        name: "Edit",
        icon: "edit"
      },
      cut: {
        name: "Cut",
        icon: "cut"
      },
      sep1: "---------",
      quit: {
        name: "Quit",
        icon: "quit"
      },
      sep2: "---------",
      fold1: {
        name: "Sub group",
        items: {
          fold1_key1: {
            name: "Foo bar"
          },
          fold2: {
            name: "Sub group 2",
            items: {
              fold2_key1: {
                name: "alpha"
              },
              fold2_key2: {
                name: "bravo"
              },
              fold2_key3: {
                name: "charlie"
              }
            }
          },
          fold1_key3: {
            name: "delta"
          }
        }
      },
      fold1a: {
        name: "Other group",
        items: {
          fold1a_key1: {
            name: "echo"
          },
          fold1a_key2: {
            name: "foxtrot"
          },
          fold1a_key3: {
            name: "golf"
          }
        }
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-7",
    position: (opt, x, y) => {
      let position = isRtl ? x - opt.$menu.outerWidth() : x
      opt.$menu.css({ top: y, left: position })
    },
    items: {
      name: {
        name: "Text",
        type: "text",
        value: "Hello World",
        events: {
          keyup: ev => {
            alert(`key: ${ev.keyCode}`)
          }
        }
      },
      sep1: "---------",
      yesno: {
        name: "Boolean",
        type: "checkbox",
        selected: true
      },
      sep2: "---------",
      radio1: {
        name: "Radio1",
        type: "radio",
        radio: "radio",
        value: "1"
      },
      radio2: {
        name: "Radio2",
        type: "radio",
        radio: "radio",
        value: "2",
        selected: true
      },
      radio3: {
        name: "Radio3",
        type: "radio",
        radio: "radio",
        value: "3"
      },
      radio4: {
        name: "Radio3",
        type: "radio",
        radio: "radio",
        value: "4",
        disabled: true
      },
      sep3: "---------",
      select: {
        name: "Select",
        type: "select",
        options: { 1: "one", 2: "two", 3: "three" },
        selected: 2
      },
      area1: {
        name: "Textarea with height",
        type: "textarea",
        value: "Hello World",
        height: 40
      },
      area2: {
        name: "Textarea",
        type: "textarea",
        value: "Hello World"
      },
      sep4: "---------",
      key: {
        name: "Something Clickable",
        callback: $.noop
      }
    },
    events: {
      show: option => {
        $.contextMenu.setInputValues(option, this.data())
      },
      hide: option => {
        $.contextMenu.getInputValues(option, this.data())
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-8",
    position: (opt, x, y) => {
      let position = isRtl ? x - opt.$menu.outerWidth() : x
      opt.$menu.css({ top: y, left: position })
    },
    trigger: "left",
    callback: (key, options) => {
      alert(`clicked: ${key}`)
    },
    items: {
      edit: {
        name: "Edit",
        icon: "edit"
      },
      cut: {
        name: "Cut",
        icon: "cut"
      },
      copy: {
        name: "Copy",
        icon: "copy"
      },
      paste: {
        name: "Paste",
        icon: "paste"
      },
      delete: {
        name: "Delete",
        icon: "delete"
      },
      sep1: "---------",
      quit: {
        name: "Quit",
        icon: (element, key, item) => {
          return "context-menu-icon context-menu-icon-quit"
        }
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-9",
    position: (opt, x, y) => {
      let position = isRtl ? x - opt.$menu.outerWidth() : x
      opt.$menu.css({ top: y, left: position })
    },
    trigger: "hover",
    delay: 200,
    autoHide: true,
    callback: (key, options) => {
      alert(`clicked: ${key}`)
    },
    items: {
      edit: {
        name: "Edit",
        icon: "edit"
      },
      cut: {
        name: "Cut",
        icon: "cut"
      },
      copy: {
        name: "Copy",
        icon: "copy"
      },
      paste: {
        name: "Paste",
        icon: "paste"
      },
      delete: {
        name: "Delete",
        icon: "delete"
      },
      sep1: "---------",
      quit: {
        name: "Quit",
        icon: (element, key, item) => {
          return "context-menu-icon context-menu-icon-quit"
        }
      }
    }
  })
})

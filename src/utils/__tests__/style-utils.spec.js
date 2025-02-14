import { setTextFontSize } from "../style-utils";

describe("setTextFontSize function", () => {
  let text;
  let font;
  let textFontSize;
  let hasIcon;

  beforeEach(() => {
    text = {
      style: { fontSize: "12px" },
      offsetWidth: "20",
      children: [
        {
          style: { marginRight: "0px" },
        },
        {
          style: { marginRight: "0px" },
        },
      ],
    };
    font = { style: { italic: true } };
    textFontSize = 12;
    hasIcon = true;
  });

  it("should set font size and margins for italic font with icon", () => {
    setTextFontSize(text, font, textFontSize, hasIcon);
    expect(text.style.fontSize).toBe("10.08px");
    expect(text.children[0].style.marginRight).toBe("0.80px");
    expect(text.children[1].style.marginRight).toBe("0.80px");
  });

  it("should set font size and margins for italic font without icon", () => {
    hasIcon = false;
    setTextFontSize(text, font, textFontSize, hasIcon);
    expect(text.style.fontSize).toBe("10.80px");
    expect(text.children[0].style.marginRight).toBe("0.40px");
  });

  it("should set font size and margins for non-italic font with icon", () => {
    font.style.italic = false;
    setTextFontSize(text, font, textFontSize, hasIcon);
    expect(text.style.fontSize).toBe("10.56px");
    expect(text.children[0].style.marginRight).toBe("0.80px");
  });

  it("should set font size for non-italic font without icon", () => {
    hasIcon = false;
    font.style.italic = false;
    setTextFontSize(text, font, textFontSize, hasIcon);
    expect(text.style.fontSize).toBe("11.04px");
  });
});

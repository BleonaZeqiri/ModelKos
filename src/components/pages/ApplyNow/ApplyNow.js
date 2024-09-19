import React, { useState, useRef } from "react";
import "./styles/ApplyNow.scss";
import { TiArrowSortedDown } from "react-icons/ti";
import DateInput from "./DateInput";
import { translate } from "../../../translation/translate";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
const ApplyNow = () => {
  const language = useSelector((state) => state.language.language);

  const fileInputRef = useRef(null);
  const [isPlaceholderSelected, setIsPlaceholderSelected] = useState(true);

  const [selectedImage, setSelectedImage] = useState(null);
  const handleSelectedChange = (e) => {
    setIsPlaceholderSelected(e.target.value === "");
  };
  const [selectedOptions, setSelectedOptions] = useState({
    height: "CM",
    bust: "CM",
    cup: "CM",
    hips: "CM",
    waist: "CM",
    shoe: "CM",
  });

  const handleSelectChange = (e, name) => {
    setSelectedOptions({
      ...selectedOptions,
      [name]: e.target.value,
    });
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    } else {
      console.error("Selected file is not an image.");
    }
  };
  const intl = useIntl();
  const placeholderMessage = `${translate[language].applyNow_placeholderMessage} `;
  const placeholderAddress = `${translate[language].applyNow_placeholderAddress} `;
  const placeholderName = `${translate[language].applyNow_placeholderName} `;

  const placeholderEmail = `${translate[language].applyNow_placeholderEmail} `;

  const placeholderNumber = `${translate[language].applyNow_placeholderNumber} `;
  const eg = `${translate[language].applyNow_eg} `;
  const eg1 = `${translate[language].applyNow_eg1} `;
  const eg2 = `${translate[language].applyNow_eg2} `;

  return (
    <div className="apply-form">
      <form>
        <div className="container-form">
          <div className="contact-information">
            <div className="contact-group">
              <h1>
                <FormattedMessage id={translate[language].applyNowTitle1} />
              </h1>
              <div className="input-name">
                <p>
                  <FormattedMessage
                    id={translate[language].applyNow_InputName}
                  />
                </p>
                <input
                  type="text"
                  name="name"
                  placeholder={placeholderName}
                  required
                />
              </div>
              <div className="input-name">
                <p>
                  <FormattedMessage
                    id={translate[language].applyNow_InputAddress}
                  />
                </p>
                <input
                  type="text"
                  name="address"
                  placeholder={placeholderAddress}
                  required
                />
              </div>
              <div className="input-name">
                <p>
                  <FormattedMessage
                    id={translate[language].applyNow_InputEmail}
                  />
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder={placeholderEmail}
                  required
                />
              </div>
              <div className="input-name">
                <p>
                  <FormattedMessage
                    id={translate[language].applyNow_InputNumber}
                  />
                </p>
                <input
                  type="number"
                  name="contactNumber"
                  placeholder={placeholderNumber}
                  required
                />
              </div>
              <div className="input-name">
                <p>
                  <FormattedMessage
                    id={translate[language].applyNow_InputMessage}
                  />
                </p>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder={placeholderMessage}
                  required
                />
              </div>
            </div>
          </div>

          <div className="measurements">
            <div className="measurements-group">
              <h1>
                <FormattedMessage id={translate[language].applyNowTitle2} />
              </h1>
              <div className="input-name">
                <p>
                  <FormattedMessage
                    id={translate[language].applyNow_InputGender}
                  />
                </p>
                <div className="custom-select-wrapper">
                  <select
                    name="gender"
                    className={`required-entry validate-cc-type-select ${
                      isPlaceholderSelected ? "placeholder-selected" : ""
                    }`}
                    onChange={handleSelectedChange}
                    required
                  >
                    <option value="" disabled selected>
                      {intl.formatMessage({
                        id: translate[language].applyNow_ChooseGender,
                      })}
                    </option>
                    <option value="female">
                      {intl.formatMessage({
                        id: translate[language].applyNow_Female,
                      })}
                    </option>
                    <option value="male">
                      {intl.formatMessage({
                        id: translate[language].applyNow_Male,
                      })}
                    </option>
                  </select>
                  <TiArrowSortedDown />
                </div>
              </div>

              <div className="input-name">
                <p>
                  <FormattedMessage
                    id={translate[language].applyNow_InputBirth}
                  />
                </p>
                <div className="custom-select-wrapper ">
                  <DateInput />
                </div>
              </div>

              <div className="input-content">
                <div className="input-name">
                  <p>
                    <FormattedMessage
                      id={translate[language].applyNow_InputHeight}
                    />
                  </p>
                  <div className="input-with-dropdown">
                    <input type="text" name="height" placeholder={eg2} />
                    <div className="custom-select-wrapper selected">
                      <select
                        name="select-height"
                        className={`required-entry validate-cc-type-select ${
                          selectedOptions.height === "CM"
                            ? "placeholder-selected"
                            : ""
                        }`}
                        onChange={(e) => handleSelectChange(e, "height")}
                        required
                      >
                        <option value="CM" disabled selected>
                          {intl.formatMessage({
                            id: "applyNow_cm",
                            defaultMessage: "CM",
                          })}
                        </option>
                        <option value="cm">
                          {intl.formatMessage({
                            id: "applyNow_cm",
                            defaultMessage: "CM",
                          })}
                        </option>
                        <option value="mm">
                          {intl.formatMessage({
                            id: "applyNow_mm",
                            defaultMessage: "MM",
                          })}
                        </option>
                        <option value="m">
                          {intl.formatMessage({
                            id: "applyNow_m",
                            defaultMessage: "M",
                          })}
                        </option>
                      </select>
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>
                <div className="input-name">
                  <p>
                    <FormattedMessage
                      id={translate[language].applyNow_InputBust}
                    />
                  </p>
                  <div className="input-with-dropdown">
                    <input type="text" name="bust" placeholder={eg1} />
                    <div className="custom-select-wrapper selected">
                      <select
                        name="select-bust"
                        className={`required-entry validate-cc-type-select ${
                          selectedOptions.bust === "CM"
                            ? "placeholder-selected"
                            : ""
                        }`}
                        onChange={(e) => handleSelectChange(e, "bust")}
                        required
                      >
                        <option value="CM" disabled selected>
                          {intl.formatMessage({
                            id: "applyNow_cm-1",
                            defaultMessage: "CM",
                          })}
                        </option>
                        <option value="cm-1">
                          {intl.formatMessage({
                            id: "applyNow_cm-1",
                            defaultMessage: "CM",
                          })}
                        </option>
                        <option value="mm-1">
                          {intl.formatMessage({
                            id: "applyNow_mm-1",
                            defaultMessage: "MM",
                          })}
                        </option>
                        <option value="m-1">
                          {intl.formatMessage({
                            id: "applyNow_m-1",
                            defaultMessage: "M",
                          })}
                        </option>
                      </select>
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>
                <div className="input-name">
                  <p>
                    <FormattedMessage
                      id={translate[language].applyNow_InputCup}
                    />
                  </p>
                  <div className="input-with-dropdown">
                    <input type="text" name="cup" placeholder={eg} />
                    <div className="custom-select-wrapper selected">
                      <select
                        name="select-cup"
                        className={`required-entry validate-cc-type-select ${
                          selectedOptions.cup === "CM"
                            ? "placeholder-selected"
                            : ""
                        }`}
                        onChange={(e) => handleSelectChange(e, "cup")}
                        required
                      >
                        <option value="CM" disabled selected>
                          {intl.formatMessage({
                            id: "applyNow_cm-2",
                            defaultMessage: "CM",
                          })}
                        </option>
                        <option value="cm-2">
                          {intl.formatMessage({
                            id: "applyNow_cm-2",
                            defaultMessage: "CM",
                          })}
                        </option>
                        <option value="mm-2">
                          {intl.formatMessage({
                            id: "applyNow_mm-2",
                            defaultMessage: "MM",
                          })}
                        </option>
                        <option value="ma-2">
                          {intl.formatMessage({
                            id: "applyNow_m-2",
                            defaultMessage: "M",
                          })}
                        </option>
                      </select>
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>

                <div className="input-name">
                  <p>
                    <FormattedMessage
                      id={translate[language].applyNow_InputHips}
                    />
                  </p>
                  <div className="input-with-dropdown">
                    <input type="text" name="hips" placeholder={eg2} />
                    <div className="custom-select-wrapper selected">
                      <select
                        name="select-hips"
                        className={`required-entry validate-cc-type-select ${
                          selectedOptions.hips === "CM"
                            ? "placeholder-selected"
                            : ""
                        }`}
                        onChange={(e) => handleSelectChange(e, "hips")}
                        required
                      >
                        <option value="CM" disabled selected>
                          {intl.formatMessage({
                            id: "applyNow_cm-3",
                            defaultMessage: "CM",
                          })}
                        </option>
                        <option value="cm-3">
                          {intl.formatMessage({
                            id: "applyNow_cm-3",
                            defaultMessage: "CM",
                          })}
                        </option>
                        <option value="mm-3">
                          {intl.formatMessage({
                            id: "applyNow_mm-3",
                            defaultMessage: "MM",
                          })}
                        </option>
                        <option value="m-3">
                          {intl.formatMessage({
                            id: "applyNow_m-3",
                            defaultMessage: "M",
                          })}
                        </option>
                      </select>
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>
                <div className="input-name">
                  <p>
                    <FormattedMessage
                      id={translate[language].applyNow_InputWaist}
                    />
                  </p>
                  <div className="input-with-dropdown">
                    <input type="text" name="waist" placeholder={eg1} />
                    <div className="custom-select-wrapper selected">
                      <select
                        name="select-waist"
                        className={`required-entry validate-cc-type-select ${
                          selectedOptions.waist === "CM"
                            ? "placeholder-selected"
                            : ""
                        }`}
                        onChange={(e) => handleSelectChange(e, "waist")}
                        required
                      >
                        <option value="CM" disabled selected>
                          {intl.formatMessage({
                            id: "applyNow_cm-4",
                            defaultMessage: "CM",
                          })}
                        </option>
                        <option value="cm-4">
                          {intl.formatMessage({
                            id: "applyNow_cm-4",
                            defaultMessage: "CM",
                          })}
                        </option>
                        <option value="mm-4">
                          {intl.formatMessage({
                            id: "applyNow_mm-4",
                            defaultMessage: "MM",
                          })}
                        </option>
                        <option value="m-4">
                          {intl.formatMessage({
                            id: "applyNow_m-4",
                            defaultMessage: "M",
                          })}
                        </option>
                      </select>
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>
                <div className="input-name">
                  <p>
                    <FormattedMessage
                      id={translate[language].applyNow_InputShoe}
                    />
                  </p>
                  <div className="input-with-dropdown">
                    <input type="text" name="shoe" placeholder={eg} />
                    <div className="custom-select-wrapper selected">
                      <select
                        name="select-shoe"
                        className={`required-entry validate-cc-type-select ${
                          selectedOptions.shoe === "CM"
                            ? "placeholder-selected"
                            : ""
                        }`}
                        onChange={(e) => handleSelectChange(e, "shoe")}
                        required
                      >
                        <option value="CM" disabled selected>
                          {intl.formatMessage({
                            id: "applyNow_cm-5",
                            defaultMessage: "CM",
                          })}
                        </option>
                        <option value="cm-5">
                          {intl.formatMessage({
                            id: "applyNow_cm-5",
                            defaultMessage: "CM",
                          })}
                        </option>
                        <option value="mm-5">
                          {intl.formatMessage({
                            id: "applyNow_mm-5",
                            defaultMessage: "MM",
                          })}
                        </option>
                        <option value="m-5">
                          {intl.formatMessage({
                            id: "applyNow_m-5",
                            defaultMessage: "M",
                          })}
                        </option>
                      </select>
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>
              </div>

              <div className="upload-image-wrapper">
                <div className="input-name upload-text">
                  <p>
                    <FormattedMessage
                      id={translate[language].applyNow_InputUpload}
                    />
                  </p>
                  <span>
                    <FormattedMessage
                      id={translate[language].applyNow_FullBody}
                    />
                  </span>
                </div>

                <div className="upload-image">
                  <div className="upload-border">
                    {selectedImage ? (
                      <div style={{ width: "auto" }}>
                        <img
                          src={selectedImage}
                          alt="Selected"
                          style={{ width: "95%", height: "116px" }}
                        />
                      </div>
                    ) : (
                      <p>
                        <FormattedMessage
                          id={translate[language].applyNow_UploadImage}
                        />
                      </p>
                    )}

                    <button type="button" onClick={handleButtonClick} required>
                      <FormattedMessage
                        id={translate[language].applyNow_Browse}
                      />
                    </button>
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <p className="terms">
            <FormattedMessage id={translate[language].applyNow_SubmitText} />
          </p>
          <button className="button-submit" type="submit">
            <FormattedMessage id={translate[language].applyNow_Submit} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyNow;

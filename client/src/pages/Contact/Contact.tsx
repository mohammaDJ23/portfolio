import {
  FormEvent,
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

import { TweenMax } from "gsap";

import { useRendringPage } from "../../shared/hook/rendring-page/rendring-page";
import NavigationIcon from "../../shared/ui/Navigation-icon/Navigation-Icon";
import Navigation from "../../shared/ui/Navigation/Navigation";
import Address from "../../components/Contact/Address/Address";
import Inputs from "../../components/Contact/Inputs/Inputs";
import { DurationTimesEnum, ErrorTypes } from "../../shared/types/types";
import { queries } from "../../shared/utils/queries/queries";
import { useFormValidation } from "../../shared/hook/form-validation/form-validation";
import Message from "../../shared/ui/Message/Message";
import { InputCleanerContext } from "../../shared/context/input-cleaner/input-cleaner";

import "./Contact.css";

const Contact: FunctionComponent = () => {
  const contactRef = useRef<HTMLElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);
  const nameInputRef = useRef<HTMLDivElement | null>(null);
  const emailInputRef = useRef<HTMLDivElement | null>(null);
  const messageInputRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const abortHttpRequestRef = useRef<AbortController[]>([]);

  const [showContactInformation, setShowContactInformation] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<ErrorTypes | string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { inputCleaner } = useContext(InputCleanerContext);

  const { isAllowToRender } = useRendringPage(contactRef);
  const { onInputHandler, formValid, inputs } = useFormValidation();

  const showContactInformaitonHandler = () => setShowContactInformation(prevState => !prevState);

  useEffect(() => {
    const { current: head } = headRef;
    const { current: nameInput } = nameInputRef;
    const { current: emailInput } = emailInputRef;
    const { current: messageInput } = messageInputRef;
    const { current: button } = buttonRef;
    const { current: arrow } = arrowRef;

    const htmlArr: (HTMLDivElement | null)[] = [
      head,
      nameInput,
      emailInput,
      messageInput,
      button,
      arrow
    ];

    if (htmlArr.length > 0 && htmlArr.every(html => html) && isAllowToRender) {
      TweenMax.fromTo(
        htmlArr,
        DurationTimesEnum.FAST_DURATION,
        { opacity: 0, y: 20 },
        { opacity: 1, delay: 0.1, y: 0, stagger: DurationTimesEnum.STAGGER, ease: "expo.out" }
      );
    }
  }, [isAllowToRender, arrowRef, headRef, nameInputRef, emailInputRef, messageInputRef, buttonRef]);

  // send request to the server

  const submitFormHandler = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const { name, email, message } = inputs;

      const query = queries.leaveMessageHandlerQuery.bind(queries, {
        name: name.value,
        email: email.value,
        message: message.value
      });

      try {
        setIsLoading(true);

        const { current: abortHttpRequest } = abortHttpRequestRef;

        const abortController = new AbortController();

        abortHttpRequest.push(abortController);

        const response = await fetch("https://prft-mn.herokuapp.com/graphql", {
          method: "POST",
          body: JSON.stringify(query()),
          headers: { "Content-Type": "application/json" },
          signal: abortController.signal
        });

        const abort = abortHttpRequest.findIndex(item => item === abortController);

        if (abort > -1) {
          abortHttpRequest.splice(abort, 1);
        }

        const responseData: any = await response.json();

        if (!response.ok) {
          setError(JSON.parse(responseData.errors[0].message));
          return;
        }

        setMessage(responseData.data.leaveMessageHandler.message);
        inputCleaner();
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    },
    [inputs, inputCleaner]
  );

  // abort a request

  useEffect(() => {
    const { current: abortHttpRequest } = abortHttpRequestRef;

    return () => {
      abortHttpRequest.forEach(item => item.abort());
    };
  }, []);

  useEffect(() => {
    if (message.length > 0 || (typeof error === "string" && error.length > 0)) {
      const timer = setTimeout(() => {
        setMessage("");
        setError("");
      }, 8000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [message, error]);

  return (
    <>
      <Message message={message} error={!Array.isArray(error) ? error : undefined} />
      <Navigation />

      <section
        ref={contactRef}
        className="contact overflow-auto gray-background-color position-relative full-screen"
      >
        {isAllowToRender && (
          <>
            <div
              ref={arrowRef}
              onClick={showContactInformaitonHandler}
              title="Contact information"
              className="position-absolute bottom-left-3-50 hover z-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="black"
                className="bi bi-arrow-up-circle-fill default-transition"
                viewBox="0 0 16 16"
              >
                <path
                  className="default-transition"
                  d={
                    showContactInformation
                      ? "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                      : "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                  }
                />
              </svg>
            </div>

            <Address showContactInformation={showContactInformation} />

            <div className="padding-3">
              <div className="max-width-1080 m-auto m-0 w-100 h-100 position-relative">
                <NavigationIcon />

                <div className="container-fluid py-5">
                  <div className="row m-0">
                    <div ref={headRef} className="text-center">
                      <h3 className="yellow-color mb-5">SAY HELLO</h3>
                    </div>

                    <div className="row m-0 justify-content-center">
                      <Inputs
                        nameInputRef={nameInputRef}
                        emailInputRef={emailInputRef}
                        messageInputRef={messageInputRef}
                        buttonRef={buttonRef}
                        submitFormHandler={submitFormHandler}
                        onInputHandler={onInputHandler}
                        formValid={formValid}
                        inputsError={Array.isArray(error) ? error : undefined}
                        isLoading={isLoading}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Contact;

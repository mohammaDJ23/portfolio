import { FormEvent } from "react";

export interface UseRendringPageHookTypes {
  isAllowToRender: boolean;
}

export interface HtmlRefTypes {
  current: HTMLElement | null;
}

interface HtmlDivRefTypes {
  current: HTMLDivElement | null;
}

export interface UseRedirectHookTypes {
  navigateToPage: (page: string) => void;
}

export interface HomePicturesTypes {
  id: string;
  picture: string;
  yellowButton: boolean;
}

interface HomePicturesArrayTypes {
  pictures: HomePicturesTypes[];
}

export interface HomeButtonsComponentTypes extends HomePicturesArrayTypes {
  onClickHandler: ({ id, index }: { id: string; index: number }) => void;
  buttonRef: HtmlDivRefTypes;
}

export interface HomeBackgroundsComponentTypes extends HomePicturesArrayTypes {
  translateY: number;
  carouselRef: HtmlDivRefTypes;
}

export interface AboutMeAbstractComponentTypes {
  aboutMeAbstractRef: HtmlDivRefTypes;
}

export interface BackgroundChangeHandlerTypes {
  id: string;
  index: number;
}

export interface HomeStateTypes extends HomePicturesArrayTypes {
  screenHeight: number;
  translateY: number;
  carouselPosition: number;
}

export enum HomeDispatchEnums {
  SCREEN_HEIGHT,
  TRANSLATE_Y,
  CAROUSEL_POSITION,
  PICTURES
}

export type HomeDispatchTypes =
  | { type: HomeDispatchEnums.SCREEN_HEIGHT; screenHeight: number }
  | { type: HomeDispatchEnums.TRANSLATE_Y; translateY: number }
  | { type: HomeDispatchEnums.CAROUSEL_POSITION; carouselPosition: number }
  | { type: HomeDispatchEnums.PICTURES; id: string };

export interface InitialInformationComponentTypes extends UseRedirectHookTypes {
  myNameRef: HtmlDivRefTypes;
  myJobRef: HtmlDivRefTypes;
  myLevelRef: HtmlDivRefTypes;
  myPortfolioRef: HtmlDivRefTypes;
}

export interface NavigationContextTypes {
  showNavigation: boolean;
  showNavigationHandler: () => void;
}

export interface NavigationListTypes {
  name: string;
  path: string;
}

export interface UseCurveLineHookTypes {
  curve: string;
}

export interface CurveLineTypes {
  path: string;
  width: string;
  height: string;
  transition: string;
  position: string;
  opacity: string;
  small?: boolean;
  large?: boolean;
}

export interface UseCircleHookTypes {
  scale: number;
  rotate: number;
}

export interface GetRandomArrElTypes {
  arrEl: string | UseCircleHookTypes;
  index: number;
  state?: string | UseCircleHookTypes;
  arr?: string[] | UseCircleHookTypes[];
}

export interface UseShapeUtilesHookTypes {
  getRandomArrEl: (arr: UseCircleHookTypes[] | string[]) => GetRandomArrElTypes;

  checkForRepeatEl: (
    arrEl: string | UseCircleHookTypes,
    index: number,
    state: string | UseCircleHookTypes,
    arr: string[] | UseCircleHookTypes[]
  ) => string | UseCircleHookTypes;
}

export interface SkillItemTypes {
  percent: number;
  label: string;
}

export interface SkillsItemArrTypes {
  skills: SkillItemTypes[];
  skillItemPerCol: number;
  skillsItemRef: HtmlDivRefTypes;
}

export interface MyWorksTypes {
  name: string;
  image: string;
  url: string;
}

export interface PortfolioItemComponentTypes {
  portfolio: MyWorksTypes[];
  itemPerRow: number;
  portfolioItemRef: HtmlDivRefTypes;
  portfolioItemHeadRef: HtmlDivRefTypes;
}

type OnInputHandler = (arg: { label: string; value: string; valid: boolean }) => void;

export interface InputTypes {
  label: string;
  onInputHandler: OnInputHandler;
  className?: string;
  inputError: string | undefined;
}

export interface AddressComponentTypes {
  showContactInformation: boolean;
}

export enum ResizeHandlerActionsEnums {
  SHOW_CURVE,
  PORTfOLIO_ITEM_PER_ROW,
  SKILL_ITEM_PER_COL
}

export interface UseResizeHookTypes {
  showCurve: boolean;
  portfolioItemPerRow: number;
  skillItemPerCol: number;
}

export interface UseResizeHookReturnTypes extends UseResizeHookTypes {
  mySkills: SkillItemTypes[];
}

type InputError = { [key: string]: string }[] | undefined;

export interface InputsComponentTypes {
  nameInputRef: HtmlDivRefTypes;
  emailInputRef: HtmlDivRefTypes;
  messageInputRef: HtmlDivRefTypes;
  buttonRef: HtmlDivRefTypes;
  submitFormHandler: (event: FormEvent) => void;
  onInputHandler: OnInputHandler;
  formValid: boolean;
  inputsError: InputError;
  isLoading: boolean;
}

export type resizeDispatchTypes =
  | { type: ResizeHandlerActionsEnums.SHOW_CURVE; showCurve: boolean }
  | { type: ResizeHandlerActionsEnums.PORTfOLIO_ITEM_PER_ROW; portfolioItemPerRow: number }
  | { type: ResizeHandlerActionsEnums.SKILL_ITEM_PER_COL; skillItemPerCol: number };

export enum DurationTimesEnum {
  FAST_DURATION = 0.8,
  SLOW_DURATION = 1.2,
  STAGGER = 0.25
}

export interface LeaveMessageHandlerQueryTypes {
  name: string;
  email: string;
  message: string;
}

export interface LeaveMessageHandlerReturnTypes {
  query: string;
  variables: LeaveMessageHandlerQueryTypes;
}

export enum InputEnums {
  NAME = "Name",
  EMAIL = "Email",
  MESSAGE = "Message"
}

export interface IsValidInputTypes {
  valid: boolean;
  error: string;
}

export interface InputStateTypes {
  value: string;
  validate: IsValidInputTypes;
}

export enum FormValidationEnums {
  FORM_VALIDATION,
  CLEAR_INPUTS,
  CHANGE_INPUT
}

export type InputDispatchTypes =
  | {
      type: FormValidationEnums.CHANGE_INPUT;
      value: string;
      label: string;
    }
  | {
      type: FormValidationEnums.CLEAR_INPUTS;
    };

export interface UseFormValidationStateHookTypes {
  formValid: boolean;

  inputs: {
    [key: string]: { value: string; valid: boolean };
  };

  onInputHandler?: OnInputHandler;
}

export type UseFormValidationDispatchTypes =
  | {
      type: FormValidationEnums.FORM_VALIDATION;
      value: string;
      inputValid: boolean;
      label: string;
    }
  | { type: FormValidationEnums.CLEAR_INPUTS };

export type ErrorTypes = { [key: string]: string }[];

export interface InputCleanerContextTypes {
  isClear: boolean;
  inputCleaner: () => void;
}

export interface MessageComponentTypes {
  message: string;
  error?: string;
}

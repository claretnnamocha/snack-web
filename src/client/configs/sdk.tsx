export const versions = {
  '31.0.0': true,
  '32.0.0': true,
};

export const DEFAULT_SDK_VERSION = '32.0.0';
export const FALLBACK_SDK_VERSION = '32.0.0';

export type SDKVersion = keyof typeof versions;

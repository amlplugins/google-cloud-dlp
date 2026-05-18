/**
 * @amlplugins/google-cloud-dlp
 *
 * Thin namespaced re-export of the native @google-cloud/dlp SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Cloud Data Loss Prevention.
 */

import * as _sdk from "@google-cloud/dlp";
export * from "@google-cloud/dlp";
export { _sdk as sdk };
export default _sdk;

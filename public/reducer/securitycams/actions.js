import securitycams from '../../JSON/securitycams';
export const LOAD_SECURITY_CAMS = 'LOAD_SECURITY_CAMS';

export function getSecurityCams() {
    return {
        type: LOAD_SECURITY_CAMS,
        securitycams
    }
}
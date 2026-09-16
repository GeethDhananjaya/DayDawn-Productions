/**
 * DAYDAWN Productions - User Roles & Permission Definitions
 * Clean role taxonomy supporting multi-tier user workflows.
 */

export const ROLES = {
  ADMIN: 'ADMIN',
  CREW: 'CREW',
  CLIENT: 'CLIENT',
};

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    'manage_productions',
    'view_inquiries',
    'manage_crew',
    'edit_content',
    'view_analytics',
  ],
  [ROLES.CREW]: [
    'view_call_sheets',
    'view_equipment_schedules',
    'view_production_briefs',
    'update_shot_list',
  ],
  [ROLES.CLIENT]: [
    'view_project_status',
    'review_dailies',
    'submit_brief',
    'download_deliverables',
  ],
};

/**
 * Checks if a specific role has a given permission
 * @param {string} role
 * @param {string} permission
 * @returns {boolean}
 */
export const hasPermission = (role, permission) => {
  if (!role || !ROLE_PERMISSIONS[role]) return false;
  return ROLE_PERMISSIONS[role].includes(permission);
};

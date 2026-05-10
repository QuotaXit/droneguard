/**
 * Utility functions for authentication and role-based routing
 */

/**
 * Normalize a role string to lowercase and trim whitespace
 */
export function normalizeRole(role) {
  return String(role || "").trim().toLowerCase()
}

/**
 * Get the correct dashboard path based on user role
 * @param {string} role - User role from database
 * @returns {string} - Dashboard path for the user
 */
export function getDashboardPath(role) {
  const normalizedRole = normalizeRole(role)

  if (
    normalizedRole === "client" ||
    normalizedRole === "cliente" ||
    normalizedRole === "customer"
  ) {
    return "/dashboard-client"
  }

  if (normalizedRole === "pilot" || normalizedRole === "pilota") {
    return "/dashboard"
  }

  if (normalizedRole === "admin") {
    return "/admin"
  }

  return "/"
}

/**
 * Check if a role is a client
 */
export function isClient(role) {
  const normalizedRole = normalizeRole(role)
  return (
    normalizedRole === "client" ||
    normalizedRole === "cliente" ||
    normalizedRole === "customer"
  )
}

/**
 * Check if a role is a pilot
 */
export function isPilot(role) {
  const normalizedRole = normalizeRole(role)
  return normalizedRole === "pilot" || normalizedRole === "pilota"
}

/**
 * Check if a role is an admin
 */
export function isAdmin(role) {
  const normalizedRole = normalizeRole(role)
  return normalizedRole === "admin"
}

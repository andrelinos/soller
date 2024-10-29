export function getInitialsFullNameAvatar(name: string | undefined) {
  if (!name) {
    return 'NA'
  }

  try {
    const initials = name.trim().split(' ')
    if (initials.length === 1) {
      return initials[0][0].toUpperCase()
    }

    return initials[0][0].toUpperCase() + initials[1][0].toUpperCase()
  } catch (error) {
    return 'NA'
  }
}

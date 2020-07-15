const elapsedTime = (time) => {
  const { floor } = Math
  const now = floor(new Date().getTime() / 1000)
  const elapsed = now - time

  const years = floor(elapsed / 31_556_926)
  if (years >= 2) return `${years} anos`
  if (years === 1) return '1 ano'

  const months = floor(elapsed / 2_629_743)
  if (months >= 2) return `${months} meses`
  if (months === 1) return '1 mês'

  const weeks = floor(elapsed / 604_800)
  if (weeks >= 2) return `${weeks} semanas`
  if (weeks === 1) return '1 semana'

  const days = floor(elapsed / 86_400)
  if (days >= 2) return `${days} dias`
  if (days === 1) return '1 dia'

  const hours = floor(elapsed / 3_600)
  if (hours >= 2) return `${hours} horas`
  if (hours === 1) return '1 hora'

  const minutes = floor(elapsed / 60)
  if (minutes >= 2) return `${minutes} minutos`
  if (minutes === 1) return '1 minuto'

  return 'poucos segundos'
}

export default elapsedTime

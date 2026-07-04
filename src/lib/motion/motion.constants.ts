export const MOTION_EASE_OUT = [0.23, 1, 0.32, 1] as const

export const MOTION_SPRING_SNAP = {
	type: "spring" as const,
	duration: 0.3,
	bounce: 0
}

export const MOTION_SOFT_FADE = {
	duration: 0.2,
	ease: MOTION_EASE_OUT
}

export const MOTION_STAGGER_DELAY = 0.07

export const MOTION_ENTER_OFFSET_Y = 8

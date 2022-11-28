// Write your types here! ✨

// Discriminated type unions make it possible to differentiate between shapes using a property
// (An example below of a discriminating property is status)
// Using discriminated type unions (type StatusMotion being one for example) are very useful in narrowing types using conditions
type BaseMotion = { from: "defendant" | "plaintiff"; reason: string };
type AllowedMotion = BaseMotion & {
	status: "allowed";
	deliberationHours: number;
};
type DeniedMotion = BaseMotion & {
	status: "denied";
	annoyedJustice: boolean;
	deliberationHours: number;
};
type PendingMotion = BaseMotion & {
	status: "pending";
	estimatedDeliberationHours: number;
};
type StatusMotion = AllowedMotion | DeniedMotion | PendingMotion;

type PreTrialMotion = {
	classification: "dismiss" | "suppress" | "venue";
	step: "pre-trial";
} & StatusMotion;
type PostTrialMotion = {
	classification: "acquittal" | "correction" | "new trial";
	step: "post-trial";
} & StatusMotion;

type Motion = PostTrialMotion | PreTrialMotion;

export const motions: Motion[] = [
	{
		annoyedJustice: true,
		classification: "acquittal",
		deliberationHours: 1,
		from: "defendant",
		reason: "The heretofore document had dried ink on it.",
		status: "denied",
		step: "post-trial",
	},
	{
		annoyedJustice: true,
		classification: "correction",
		deliberationHours: 2.5,
		from: "plaintiff",
		reason: "The tenant has ninety days to vacate.",
		status: "denied",
		step: "post-trial",
	},
	{
		classification: "suppress",
		deliberationHours: 4,
		from: "plaintiff",
		reason: "Frank was never allowed in the house.",
		status: "allowed",
		step: "pre-trial",
	},
	{
		classification: "new trial",
		estimatedDeliberationHours: 3,
		from: "defendant",
		reason: "The duel's been accepted. There's no backing out. That's the law.",
		status: "pending",
		step: "post-trial",
	},
	{
		annoyedJustice: false,
		classification: "dismiss",
		deliberationHours: 0.5,
		from: "plaintiff",
		reason:
			"It seems like you have a tenuous grasp on the English language in general.",
		status: "denied",
		step: "pre-trial",
	},
	{
		annoyedJustice: true,
		classification: "correction",
		deliberationHours: 1.5,
		from: "defendant",
		reason: "Fillibuster?",
		status: "denied",
		step: "post-trial",
	},
	{
		annoyedJustice: true,
		classification: "venue",
		deliberationHours: 0.25,
		from: "defendant",
		reason: "A time was never specified for the duel.",
		status: "denied",
		step: "pre-trial",
	},
	{
		annoyedJustice: true,
		classification: "correction",
		deliberationHours: 5,
		from: "plaintiff",
		reason: "He's making a few good points!",
		status: "denied",
		step: "post-trial",
	},
];

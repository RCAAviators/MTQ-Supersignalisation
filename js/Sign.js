class Sign {

	/**
	 * Cretes a new sign.
	 * @param {Object} [opt] - Optional parameters.
	 * @param {string} [opt.controlText="New Sign"] - Control cities to display on the sign.
	 * @param {string} [opt.shieldPosition] - Where the shields should be displayed relative to the control cities.
	 * @param {boolean} [opt.shieldBacks=false] - Whether or not shields should be displayed with backings.
	 * @param {string} [opt.guideArrow] - Which guide arrow to display on the sign, if any.
	 * @param {number} [opt.guideArrowLanes=1] - Number of lanes actoss to display guide arrows.
	 * @param {string} [opt.otherSymbols] - Other symbols on the bottom of signs (like Quebec style exit markers)
	 * @param {string} [opt.oSNum=""] - Number to place on otherSymbol
	 * @param {string} [opt.actionMessage=""] - Custom subtext to display on the sign.
	 * @param {Shield[]} [opt.shields] - Array of shields to include on sign.
	 */
	constructor({
			controlText = "New Sign",
			shieldPosition,
			shieldBacks = false,
			guideArrow,
			guideArrowLanes = 1,
			otherSymbol,
			oSNum = "",
			actionMessage = "",
			shields = []
		} = {}
	) {
		this.controlText = controlText;
		if (this.shieldPositions.includes(shieldPosition)) {
			this.shieldPosition = shieldPosition;
		} else {
			this.shieldPosition = "Above";
		}
		if (this.otherSymbols.includes(otherSymbol)) {
			this.otherSymbol = otherSymbol;
		}
		else {
			this.otherSymbol = "None";
		}
		this.shieldBacks = shieldBacks;
		if (this.guideArrows.includes(guideArrow)) {
			this.guideArrow = guideArrow;
		} else {
			this.guideArrow = "None";
		}
		if (guideArrowLanes >= 0 && guideArrowLanes <= 6) {
			this.guideArrowLanes = guideArrowLanes;
		} else {
			this.guideArrowLanes = 0;
		}
		this.oSNum = oSNum;
		this.actionMessage = actionMessage;
		this.shields = shields;
	}

	/**
	 * Create a new shield for the post. Add it to the end of the list of existing shields.
	 */
	newShield() {
		const newShield = new Shield();
		this.shields.push(newShield);
	}

	/**
	 * Delete an existing shield at the requested index.
	 * @param {number} shieldIndex - Position of the shield in the array of shields on this sign to delete.
	 */
	deleteShield(shieldIndex) {
		this.shields.splice(shieldIndex, 1);
	}
}

Sign.prototype.shieldPositions = ["Left", "Above", "Right"];
Sign.prototype.guideArrows = [
	"None",
	"Turn1:B-7",
	"Turn2:B-11",
	"Turn3:B-12",
	"Side Left:B-14",
	"AheadArrow:B-13",
	"TurnArrow:B-15",
	"Side Right:B-16",
	"Exit Only",
	"Left/Down Arrow:B-1",
	"LeftA:B-2",
	"Left/Up Arrow:B-3",
	"Right/Down Arrow:B-4",
	"RightA:B-5",
	"Right/Up Arrow:B-6",
	"Turn R:B-10",
	"Down Arrow:B-8",
	"Up Arrow:B-9"
];
Sign.prototype.otherSymbols = [
	"None",
	"Quebec-Style Exit Marker",
	"Quebec-Left",
	"Quebec-2",
	"Quebec-2-Left"
]

import React from 'react'
import City from './City'

const CityCards = ({
	deck,
	discardPile,
	openEpidemicModal,
	getProbabilities,
	playCityCard,
}) => {
	return (
		<div>
			{/* Discard Pile */}
			<div>
				<button onClick={openEpidemicModal}>Trigger Epidemic</button>
				{Object.values(discardPile).map(city => <City city={city} />)}
			</div>

			{/* Deck Sections */}
			<div>
				{/* TODO: ADD INPUT SEARCH */}
				<div>
					{deck.map((deckSection, sectionIndex) => (
						<div>
							{deckSection.map(city => (
								<City
									city={city}
									probabilities={getProbabilities(sectionIndex, city.frequency)}
									playCityCard={playCityCard}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default CityCards
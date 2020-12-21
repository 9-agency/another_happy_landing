import { Headline } from "components/Headline";
import { Services } from "components/Services";
import { Projects } from "components/Projects";
import { Careers } from "components/Careers";
import { Contact } from "components/Contact";
import { SnapContainer, SnapItem } from "components/snapContainer";

export const App = () => (
	<SnapContainer>
		<SnapItem>
			<Headline />
		</SnapItem>
		<Services />
		<Projects />
		<Careers />
		<SnapItem>
			<Contact />
		</SnapItem>
	</SnapContainer>
);

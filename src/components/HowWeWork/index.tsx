import styles from "./styles.module.css"
import Grid from "components/Grid"
import Flex from "components/Flex"
import { ReactComponent as BuildSVG } from "assets/build.svg"
import { ReactComponent as AutomateSVG } from "assets/automate.svg"
import { ReactComponent as ScaleSVG } from "assets/scale.svg"

export default () => (
    <div className={styles.component}>
        <Grid>
            <h1>How we work.</h1>
            <Flex column>
                <Flex column>
                    <BuildSVG />
                    <p>From the scratchpad, to the wild web. We build <span className="bold">successful products</span> with user experience in mind.</p>
                </Flex>
                <Flex column alignItemsCenter>
                    <Flex column>
                        <AutomateSVG />
                        <p>Continuous integration and deployment automation ensures <span className="bold">steady delivery</span> and high standards.</p>
                    </Flex>
                </Flex>
                <Flex column alignItemsEnd>
                    <Flex column>
                        <ScaleSVG />
                        <p>Features we build are <span className="bold">highly scalable</span>. This pays off in the long run.</p>
                    </Flex>
                </Flex>
            </Flex>
        </Grid>
    </div>
)


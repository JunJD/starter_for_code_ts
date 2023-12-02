import HomeLeftSection from '@/page/Home/HomeLeftSection'
import HomeRightSection from '@/page/Home/HomeRightSection'
import HomeWrapper from '@/page/Home/HomeWrapper'

import HelloWrold from '@/page/HelloWrold'
const Home = () => {
	return (
		<HomeWrapper>
			<HomeLeftSection />
			<HomeRightSection>
				<HelloWrold />
			</HomeRightSection>
		</HomeWrapper>
	)
}
export default Home
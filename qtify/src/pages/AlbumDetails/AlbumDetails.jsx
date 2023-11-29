import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { convertMsToTime, errorHandler } from "../../config/helper-methods";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import { ReactComponent as LeftArrowIcon } from "../../assets/LeftArrowIcon.svg";
import { ReactComponent as ShuffleIcon } from "../../assets/shuffleIcon.svg";
import { ReactComponent as LibraryIcon } from "../../assets/libraryIcon.svg";
import styles from "./AlbumDetails.module.css";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Footer from "../../components/Footer/Footer";

const AlbumDetails = () => {
	const navigate = useNavigate();
	const { slug } = useParams();
	const [albumDetails, setalbumDetails] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);

	const _onPageChange = (pageNo) => {
		setPage(pageNo);
	};

	const totalTimeInMs = useMemo(() => {
		return albumDetails?.songs?.reduce((sum, item) => {
			return sum + item?.durationInMs;
		}, 0);
	}, [albumDetails]);

	const displayData = useMemo(() => {
		return albumDetails?.songs?.slice((page - 1) * 10, page * 10);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, albumDetails]);

	const fetchAlbumDetails = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(
				`https://qtify-backend-labs.crio.do/album/${slug}`
			);
			setalbumDetails(response?.data?.id ? response.data : {});
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			errorHandler(err);
			navigate("/");
		}
	};

	useEffect(() => {
		if (slug) {
			fetchAlbumDetails();
		} else {
			navigate("/");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slug]);

	return (
		<div className={styles.wrapper}>
			<NavBar logo={true} feedback={true} />

			<div className={styles.leftArrowWrapper}>
				<div className={styles.leftArrow} onClick={() => navigate(`-1`)}>
					<LeftArrowIcon />
				</div>
			</div>

			{albumDetails?.id?.length ? (
				<div className={styles.albums_content_wrapper}>
					<div className={styles.albums_content_header}>
						<div className={styles.albums_img_container}>
							<img src={albumDetails.image} alt="" width={288} height={329} />
						</div>
						<div className={styles.albums_header_text}>
							<h1>Best of {albumDetails?.title} in 2023</h1>
							<p>{albumDetails?.description}</p>
							<div className={styles.songs_details}>
								<p>{albumDetails?.songs?.length} songs</p>

								<p>{convertMsToTime(totalTimeInMs)}</p>

								<p>{albumDetails.follows} Follows</p>
							</div>
							<div className={styles.btn_container}>
								<div className={styles.shuffle_btn_container}>
									<ShuffleIcon />
									<p>Shuffle</p>
								</div>
								<div className={styles.library_btn_container}>
									<LibraryIcon />
									<p>Add to library</p>
								</div>
							</div>
						</div>
					</div>

					{/* Pagination  */}

					<div className={styles.pagination_container}>
						<CustomPagination
							page={page}
							pageLimit={10}
							totalCount={albumDetails?.songs?.length}
							onPageChange={_onPageChange}
						/>
					</div>

					{/* Table  */}

					<div className={styles.table_container}>
						<table>
							<thead>
								<tr>
									<th>Title</th>
									<th>Artist</th>
									<th>Duration</th>
								</tr>
							</thead>
							<tbody>
								{displayData?.map((each, index) => (
									<tr className={"styles.table_row"} key={index}>
										<td className={styles.title_name}>
											<img
												src={each?.image}
												alt="title_image"
												width={59}
												height={64}
											/>
											<p>{each?.title}</p>
										</td>

										<td>Rs.{each?.artists[0]}</td>
										<td>{convertMsToTime(each?.durationInMs)}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			) : isLoading ? (
				<>Loadinngg...</>
			) : (
				<>"No Data found"</>
			)}

			<Footer />
		</div>
	);
};

export default AlbumDetails;

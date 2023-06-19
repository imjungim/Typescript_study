{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  //Pick ! 재사용할 수 있도록 타입을 선언해서 사용
  type VideoMetadata = Pick<Video, 'id' | 'title'>; //기존 Video타입에서 id, title만 사용(원하는것만 골라서 제한적으로 사용)

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}

import * as C from './styles'
import { TextInput, Tooltip, Grid, Input } from '@mantine/core';
import { ChevronDownIcon, InfoCircledIcon } from '@modulz/radix-icons';
import { ChangeEvent } from 'react';
import { AuxAuthor } from './auxAuthor';
import { useDispatch, useSelector } from 'react-redux';
import {
    setCurrentStep,
    setRefType1,
    setRefType2,
    setNameAuthor1,
    setSurAuthor1,
    setNameAuthor2,
    setSurAuthor2,
    setNameAuthor3,
    setSurAuthor3,
    setNameAuthor4,
    setSurAuthor4,
    setNameAuthor5,
    setSurAuthor5,
    setNameAuthor6,
    setSurAuthor6,
    setEtAlCheckbox,
    setTitle,
    setSubtitle,
    setUrl,
    setLocal,
    setDayAcess,
    setMonthAcess,
    setYearAcess,
    setDayPublic,
    setMonthPublic,
    setYearPublic,
    setPlacePublic,
    setPublishingComp,
    setNoDate,
    setEdition,
    setRadioCheck,
    setCompanyName,
    setResponsableBlog,
    setBlogTitle,
    setNamePodcastEpisode,
    setNamePodcast,
    setPodcastAnnouncer,
    setUserSocialMedia,
    setDisplayNameUser,
    setSocialMediaMensage,
    setRemetenteName,
    setEmailSubject,
    setDestinatario,
    setPaginationBook,
    setEditionBook,
    setDoiCheckbox,
    setDurationVideo,
    setUniDegreed,
    setUniversity,
    setNameGuest,
    setMagazine,
    setNumberMagaz,
    setAuxNewAuthor
} from '../redux/FormContext'


// show the inputs depending on the type of refer

export const RefInputs = () => {
    const dispatch = useDispatch();
    const {
        auxNewAuthor,
        refType1,
        refType2,
        nameAuthor1,
        surAuthor1,
        nameAuthor2,
        surAuthor2,
        nameAuthor3,
        surAuthor3,
        nameAuthor4,
        surAuthor4,
        nameAuthor5,
        surAuthor5,
        nameAuthor6,
        surAuthor6,
        companyName,
        responsableBlog,
        blogTitle,
        namePodcastEpisode,
        namePodcast,
        podcastAnnouncer,
        userSocialMedia,
        displayNameUser,
        socialMediaMensage,
        remetenteName,
        emailSubject,
        destinatario,
        paginationBook,
        editionBook,
        durationVideo,
        uniDegreed,
        university,
        nameGuest,
        magazine,
        numberMagaz,
        doiCheckbox,
        etAlCheckbox,
        title,
        subtitle,
        url,
        local,
        dayAcess,
        monthAcess,
        yearAcess,
        dayPublic,
        monthPublic,
        yearPublic,
        placePublic,
        publishingComp,
        noDate,
        edition,
        radioCheck } = useSelector((state: any) => state.allData)

    let auxRef = refType1;

    if (refType1 !== '11') {
        auxRef = refType2;
    }

    let inputHtml: any;

    // REF 11 - site
    if (auxRef === '11') {

        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSubtitle(
                    e.target.value
                ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }

        const handleAuthorRadioGroup1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setRadioCheck(
                    e.target.value
                ))
        }

        const handleAuthorRadioGroup2 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setRadioCheck(
                    e.target.value
                ))
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>

                <div className='radioCheck'>
                    <h2>Quem Escreveu essa Refer??ncia?</h2>
                    <div>
                        <label htmlFor="autor">
                            Autor(a) / Editor(a)
                            <input type="radio" name="autor" id="autor" onFocus={handleAuthorRadioGroup1} value='1' />
                        </label>
                        <label htmlFor="organizacao">
                            Organiza????o
                            <input type="radio" name="autor" id="organizacao" onFocus={handleAuthorRadioGroup2} value='2' />
                        </label>
                    </div>
                </div>

                <hr />


                <AuxAuthor />

                <hr />

                <TextInput label="T??tulo da Mat??ria" description="Titulo da Mat??ria. Geralmente o nome com grande destaque na p??gina. Exemplo do T??tulo: Clarice Lispector: Vida e Obra da Escritora." type='text' placeholder={title}
                    onBlur={handleTitle} required />

                <hr />

                <TextInput label="Subt??tulo da Mat??ria" description="Geralmente a segunda frase em destaques, logo abaixo ao t??tulo. Ex: Saiba a hist??ria da autora enigm??tica que completaria 100 anos em 2020." type='text'
                    placeholder={subtitle} onBlur={handleSubtitle} />

                <hr />

                <TextInput label="URL da P??gina da Mat??ria" description="URL ?? o link da p??gina da mat??ria. Fica no topo do seu navegador, come??ando com www e terminando com .com.br. Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/." type='text' placeholder={url} onBlur={handleUrl} required />

                <hr />

                <TextInput label="Local da de Publica????o da Mat??ria" description="Escreva a cidade onde a mat??ria foi publicada. Caso n??o souber, deixe o espa??o em branco. Ex: S??o Paulo." type='text' placeholder={local} rightSection={LocalInfoCircle} onBlur={handleLocal} />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualiza????o da Mat??ria" description="O dia que voc?? encontrou a mat??ria. Ex: 12." type='text' placeholder={dayAcess} onBlur={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Visualiza????o da Mat??ria
                            <small>O m??s que voc?? encontrou a mat??ria.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthVisualization}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualiza????o da Mat??ria" description="O ano que voc?? encontrou a mat??ria. Ex: 2022." type='text' placeholder={yearAcess} onBlur={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Mat??ria Publicada" description="Pode n??o ser poss??vel saber o dia. Ex: 12." type='text' placeholder={dayPublic} onBlur={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Publica????o da Mat??ria
                            <small>O m??s que a mat??ria foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthPubli}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publica????o" description="Ano em que foi escrita, redigida, editada ou postada. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    // REF 12 - blog
    else if (auxRef === '12') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleResponsableBlog = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setResponsableBlog(
                    e.target.value
                ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleEtalCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
            if (etAlCheckbox === 'et al.') {
                dispatch(
                    setEtAlCheckbox(
                        ''
                    ))
            } else {
                dispatch(
                    setEtAlCheckbox(
                        'et al.'
                    ))
            }
        }
        const handleBlogTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setBlogTitle(
                    e.target.value
                ))
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>


                <AuxAuthor />

                <hr />

                <TextInput label="T??tulo da Mat??ria" description="Titulo da Mat??ria. Geralmente o nome com grande destaque na p??gina. Exemplo do T??tulo: Clarice Lispector: Vida e Obra da Escritora." type='text' placeholder={title}
                    onBlur={handleTitle} required />

                <hr />

                <TextInput label="Responsavel pelo Blog" description="Geralmente ?? quem cuida de manter o blog ativo. Ex: Responsavel do site do Enem ?? a Secretaria da Educa????o. Ex: Secretaria da Educa????o." type='text' placeholder={responsableBlog}
                    onBlur={handleResponsableBlog} required />

                <hr />

                <TextInput label="T??tulo da Blog" description="Titulo do Blog. Costuma ser o nome do pr??pio site. Ex: Wikipedia" type='text' placeholder={blogTitle}
                    onBlur={handleBlogTitle} required />

                <hr />

                <TextInput label="URL da P??gina da Mat??ria" description="URL ?? o link da p??gina da mat??ria. Fica no topo do seu navegador, come??ando com www e terminando com .com.br. Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/." type='text' placeholder={url} onBlur={handleUrl} required />

                <hr />

                <TextInput label="Local da Publica????o da Mat??ria" description="Qual a cidade e o estado de onde essa mat??ria foi publicada? Ex: Bras??lia - DF. Se n??o souber, n??o precisa preencher nada.  ([S.I.] significa que n??o sabe o local!)" type='text' placeholder={local} rightSection={LocalInfoCircle} onBlur={handleLocal} />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualiza????o da Mat??ria" description="O dia que voc?? encontrou a mat??ria. Ex: 12." type='text' placeholder={dayAcess} onBlur={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Visualiza????o da Mat??ria
                            <small>O m??s que voc?? encontrou a mat??ria.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthVisualization}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualiza????o da Mat??ria" description="O ano que voc?? encontrou a mat??ria. Ex: 2022." type='text' placeholder={yearAcess} onBlur={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Mat??ria Publicada" description="Dia da Mat??ria publicada. Ex: 12." type='text' placeholder={dayPublic} onBlur={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Publica????o da Mat??ria
                            <small>O m??s que a mat??ria foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthPubli}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publica????o da Mat??ria" description="Ano em que a mat??ria foi escrita, redigida, editada ou postada. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 13 - PODCAST
    else if (auxRef === '13') {

        // INFO

        //Handles
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleEtalCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
            if (etAlCheckbox === 'et al.') {
                dispatch(
                    setEtAlCheckbox(
                        ''
                    ))
            } else {
                dispatch(
                    setEtAlCheckbox(
                        'et al.'
                    ))
            }
        }

        const handleNamePodcastEpisode = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNamePodcastEpisode(
                    e.target.value
                ))
        }
        const handleNamePodcast = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNamePodcast(
                    e.target.value
                ))
        }
        const handlePodcastAnnouncer = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPodcastAnnouncer(
                    e.target.value
                ))
        }
        inputHtml = (
            <C.Container>

                <TextInput label="Nome do Podcast" description="O nome principal do podcast. Ex: NerdCast, Intelig??ncia ltda., Flow, etc." type='text' placeholder={namePodcast} onBlur={handleNamePodcast} required />

                <hr />

                <TextInput label="Nome do Podcast e do Epis??dio" description="Nome do Podcast junto com o nome e identifica????o do Epis??dio. Ex: NerdCast #689: O jogo mental do Futebol Americano" type='text' placeholder={namePodcastEpisode} onBlur={handleNamePodcastEpisode} required />

                <hr />

                <TextInput label="Nome dos(as) Apresentadores(as)" description="Nome do apresentador ou participantes do podcast. Ex: Rog??rio Vilela." type='text' placeholder={podcastAnnouncer} onBlur={handlePodcastAnnouncer} required />

                <hr />

                <div className='checkboxEtAl'>
                    <h1>Usar "Et al.?</h1>
                    <small>"Et al." serve para indicar a exist??ncia de mais de 6 autores da sua refer??ncia.</small>
                    <div>
                        <input type="checkbox" id="etal" name="etal" onChange={handleEtalCheckbox}></input>
                        <label htmlFor="etal">Marque a caixa ao lado para usar "Et al."</label>
                    </div>
                </div>

                <hr />

                <TextInput label="URL da P??gina do Podcast" description="URL ?? o link da p??gina da mat??ria. Fica no topo do seu navegador, come??ando com www e terminando com .com.br. Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/." type='text' placeholder={url} onBlur={handleUrl} required />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualiza????o" description="O dia que voc?? encontrou. Ex: 12." type='text' placeholder={dayAcess} onBlur={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Visualiza????o
                            <small>O m??s que voc?? encontrou.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthVisualization}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualiza????o" description="O ano que voc?? encontrou. Ex: 2022." type='text' placeholder={yearAcess} onBlur={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publica????o" description="Dia em que foi postado. Ex: 12." type='text' placeholder={dayPublic} onBlur={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Publica????o
                            <small>O m??s que em que foi postado.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthPubli}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publica????o" description="Ano em que foi postado. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 14 - Redes Sociais
    else if (auxRef === '14') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleEtalCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
            if (etAlCheckbox === 'et al.') {
                dispatch(
                    setEtAlCheckbox(
                        ''
                    ))
            } else {
                dispatch(
                    setEtAlCheckbox(
                        'et al.'
                    ))
            }
        }
        const handleUserSocialMedia = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUserSocialMedia(
                    e.target.value
                ))
        }
        const handleDisplayNameUser = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDisplayNameUser(
                    e.target.value
                ))
        }
        const handleSocialMediaMensage = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSocialMediaMensage(
                    e.target.value
                ))
        }
        const handleUserSocial = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUserSocialMedia(
                    e.target.value
                ))
        }

        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Nome do Perfil do Usu??rio" description="Nome Principal mostrado pelo perfil de quem escreveu a mensagem. Ex: USP - Universidade de S??o Paulo'." type='text' placeholder={displayNameUser} onBlur={handleDisplayNameUser} required />

                <hr />

                <TextInput label="Identifica????o do Usu??rio" description="Identifica????o do perfil em si. Ex no Twitter: @usponline" type='text' placeholder={userSocialMedia}
                    onBlur={handleUserSocial} />

                <hr />

                <TextInput label="Texto sendo Refer??nciada" description="O texto usado como base para a sua refer??ncia. Aten????o! N??o precisa botar o texto/mensagem inteira. Ex: Um grupo de pacientes com HIV foi acompanhado em estudo no Hospital das Cl??nicas da USP para identificar o qu??o vulner??veis" type='text' placeholder={socialMediaMensage}
                    onBlur={handleSocialMediaMensage} required />

                <hr />

                <TextInput label="Local da Publica????o" description="Qual a cidade e o estado de onde esse post foi feito? Ex: Bras??lia - DF. Se n??o souber, n??o precisa preencher nada.  ([S.I.] significa que n??o sabe o local!)" type='text' placeholder={local} rightSection={LocalInfoCircle} onBlur={handleLocal} />

                <hr />

                <TextInput label="URL da P??gina do Post" description="URL ?? o link da p??gina da mat??ria. Fica no topo do seu navegador, come??ando com www e terminando com .com.br. Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/." type='text' placeholder={url} onBlur={handleUrl} required />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualiza????o" description="O dia que voc?? encontrou a refer??ncia. Ex: 12." type='text' placeholder={dayAcess} onBlur={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Visualiza????o
                            <small>O m??s que voc?? encontrou a refer??ncia.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthVisualization}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualiza????o" description="O ano que voc?? encontrou a refer??ncia. Ex: 2022." type='text' placeholder={yearAcess} onBlur={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publica????o" description="Dia da publica????o. Ex: 12." type='text' placeholder={dayPublic} onBlur={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Publica????o
                            <small>O m??s em que foi postado.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthPubli}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publica????o" description="Ano em que foi postado. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 15 - email
    else if (auxRef === '15') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ));
        }
        const handleRemetenteName = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setRemetenteName(
                    e.target.value
                ));
        }
        const handleEmailSubject = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setEmailSubject(
                    e.target.value
                ));
        }
        const handleDestinatario = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDestinatario(
                    e.target.value
                ));
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Nome do Remetente" description="Nome de quem enviou o email. Geralmente, o remente nesse caso ?? quem est?? fazendo a refer??ncia." type='text' placeholder={remetenteName} onBlur={handleRemetenteName} required />

                <hr />

                <TextInput label="Quem ?? o Destinat??rio" description="Nome de quem deveria receber o Email" type='text' placeholder={destinatario}
                    onBlur={handleDestinatario} required />

                <hr />

                <TextInput label="Assunto do Email" description="Assunto sobre o que se espera ser falado no Email enviado. Ex: Falha no Sistema de Verifica????o de Usu??rio do Site." type='text' placeholder={emailSubject} onBlur={handleEmailSubject} required />

                <hr />

                <TextInput label="Local do Envio do Email" description="Escreva a cidade de onde o email foi enviado. Ex: S??o Paulo. Se n??o souber, n??o precisa preencher nada. ([S.I.] significa que n??o sabe o local!)" type='text' placeholder={local} rightSection={LocalInfoCircle} onBlur={handleLocal} />

                <hr />

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia do Envio do Email" description="Dia do Envio do Email. Ex: 12" type='text' placeholder={dayPublic} onBlur={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s do Envio do Email
                            <small>O m??s que o email foi feito e enviado.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthPubli}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano do Envio do Email" description="Ano em que o email foi escrito e enviado. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 16 - wikipedia
    else if (auxRef === '16') {

        // INFO
        const AuthorFirstInfoCircle = (
            <Tooltip label='Escreva o primeiro nome nessa se????o. Se for uma organiza????o quem escreveu, bote o nome aqui.' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }

        inputHtml = (
            <C.Container>

                <TextInput label="T??tulo do Assunto" description="T??tulo do assunto pesquisado na Wikip??dia. Ex: Planeta Terra." type='text' rightSection={AuthorFirstInfoCircle} placeholder={title} onBlur={handleTitle} required />

                <hr />

                <TextInput label="URL da P??gina da Mat??ria" description="URL ?? o link da p??gina da mat??ria. Fica no topo do seu navegador, come??ando com https://www e terminando com .com.br. Ex: https://pt.wikipedia.org/wiki/Terra." type='text' placeholder={url} onBlur={handleUrl} required />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualiza????o da Mat??ria" description="O dia que voc?? encontrou a mat??ria. Ex: 12." type='text' placeholder={dayAcess} onBlur={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Visualiza????o da Mat??ria
                            <small>O m??s que voc?? encontrou a mat??ria.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthVisualization}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualiza????o da Mat??ria" description="O ano que voc?? encontrou a mat??ria. Ex: 2022." type='text' placeholder={yearAcess} onBlur={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 21 - livro
    else if (auxRef === '21') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNameAuthor1(
                    e.target.value
                ));
        }
        const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSurAuthor1(
                    e.target.value
                ));
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSubtitle(
                    e.target.value
                ));
        }

        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ));
        }
        const handlePublishingComp = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPublishingComp(
                    e.target.value
                ));
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ));
        }
        const handleEditionBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setEditionBook(
                    e.target.value
                ));
        }
        const handleEtalCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
            if (etAlCheckbox === 'et al.') {
                dispatch(
                    setEtAlCheckbox(
                        ''
                    ))
            } else {
                dispatch(
                    setEtAlCheckbox(
                        'et al.'
                    ))
            }
        }

        inputHtml = (
            <C.Container>

                <AuxAuthor />

                <hr />

                <TextInput label="T??tulo do Livro" description="Titulo do Livro. Geralmente ?? o nome com grande destaque na capa. Exemplo: A Origem das Esp??cies." type='text' placeholder={title} onBlur={handleTitle} required />

                <hr />

                <TextInput label="Edi????o do Livro" description="Edi????o do livro da refer??ncia. Se encontra na capa ou na contracapa do livro. Aten????o: Use s?? n??meros! Ex: 3" type='text' placeholder={editionBook}
                    onBlur={handleEditionBook} required />

                <hr />

                <TextInput label="Local da Publica????o do Livro" description="Ex: S??o Paulo. Se n??o souber, n??o precisa preencher nada. ([S.I.] significa que N??O se sabe o local!)" type='text' placeholder={local} rightSection={LocalInfoCircle} onBlur={handleLocal} />

                <hr />

                <TextInput label="Editora do Livro" description="Escreva o nome da editora que publicou o livro. Ex: Bloomsbury Publishing. ([s.n.] significa que N??O se sabe a editora!)" type='text' placeholder={publishingComp} onBlur={handlePublishingComp} required />

                <hr />

                <TextInput label="Pagina????o" description="Qual as p??ginas que voc?? est?? referenciando. Aten????o: Use s?? n??meros! Ex: 67 - 71" type='text' placeholder={paginationBook} onBlur={handlePaginationBook} required />

                <hr />

                <Grid className='datePublic'>


                    <Grid.Col span={12}>
                        <TextInput label="Ano de Publica????o do Livro" description="Ano em que o livro foi escrito, editado, etc. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 22
    else if (auxRef === '22') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles

        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSubtitle(
                    e.target.value
                ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ));
        }
        const handlePublishingComp = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPublishingComp(
                    e.target.value
                ));
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ));
        }
        const handleEditionBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setEdition(
                    e.target.value
                ));
        }
        const handleEtalCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
            if (etAlCheckbox === 'et al.') {
                dispatch(
                    setEtAlCheckbox(
                        ''
                    ))
            } else {
                dispatch(
                    setEtAlCheckbox(
                        'et al.'
                    ))
            }
        }

        const handleDoiCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDoiCheckbox(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>

                <TextInput label="T??tulo do Livro" description="Titulo do Livro. Geralmente ?? o nome com grande destaque na capa. Exemplo: A Origem das Esp??cies" type='text' placeholder={title} onBlur={handleTitle} required />

                <hr />

                <TextInput label="Subt??tulo do Livro" description="Subt??tulo do Livro. Geralmente ?? uma frase logo ap??s o t??tulo com grande destaque na capa. Caso n??o tenha, deixe aqui em branco.." type='text' placeholder={subtitle} onBlur={handleSubtitle} />

                <hr />

                <AuxAuthor />

                <hr />

                <TextInput label="Edi????o do Livro" description="Edi????o do livro da refer??ncia. Se encontra na capa ou na contracapa do livro. Aten????o: Use s?? n??meros! Ex: 3" type='text' placeholder={editionBook}
                    onBlur={handleEditionBook} required />

                <hr />

                <TextInput label="Local da Publica????o do Livro" description="Ex: S??o Paulo. Se n??o souber, n??o precisa preencher nada. ([S.I.] significa que N??O sabe o local!)" type='text' placeholder={local} rightSection={LocalInfoCircle} onBlur={handleLocal} />

                <hr />

                <TextInput label="Editora do Livro" description="Escreva o nome da editora que publicou o livro. Ex: Bloomsbury Publishing. ([s.n.] significa que N??O se sabe a editora!)" type='text' placeholder={publishingComp} onBlur={handlePublishingComp} required />

                <hr />

                <TextInput label="DOI do Ebook" description="DOI ?? um c??digo ??nico para a identifica????o de ebooks e outras obras digitais. (Se n??o souber, deixe em branco.)" type='text' placeholder={doiCheckbox} onBlur={handleDoiCheckbox} />

                <hr />

                <TextInput label="URL do Local do Ebook" description="URL ?? o link da p??gina da mat??ria. Fica no topo do seu navegador. Caso n??o tenha ou n??o saiba, deixe em branco." type='text' placeholder={url} onBlur={handleUrl} required />

                <hr />

                <TextInput label="Pagina????o" description="Qual as p??ginas que voc?? est?? referenciando? Aten????o: Use s?? n??meros! Ex: 67 - 71." type='text' placeholder={paginationBook} onBlur={handlePaginationBook} required />

                <hr />

                <Grid className='datePublic'>


                    <Grid.Col span={12}>
                        <TextInput label="Ano de Publica????o" description="Ano em que o ebook foi escrito, redigido ou editado. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 31 - video
    else if (auxRef === '31') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNameAuthor1(
                    e.target.value
                ));
        }
        const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSurAuthor1(
                    e.target.value
                ));
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSubtitle(
                    e.target.value
                ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleDurationVideo = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDurationVideo(
                    e.target.value
                ));
        }

        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ));
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Nome do Canal ou Site de onde o V??deo Vem" description="O nome de destaque do site ou nome do canal do YouTube. Ex: Manual do Mundo." type='text' placeholder={nameAuthor1} onBlur={handleNameAuthor1} required />

                <hr />

                <TextInput label="T??tulo do V??deo" description="T??tulo que d?? nome ao v??deo. Ex: COMO O VIDRO ?? FEITO? Manual do Mundo." type='text' placeholder={title} onBlur={handleTitle} required />

                <hr />

                <TextInput label="Dura????o do V??deo" description="Quantos minutos de dura????o tem o v??deo. Aten????o: Escreva Apenas N??meros! Ex: 11." type='text' placeholder={durationVideo}
                    onBlur={handleDurationVideo} required />

                <hr />

                <TextInput label="Local de onde o V??deo foi Feito" description="Ex: Campinas - SP. Se n??o souber, n??o precisa preencher nada. ([S.I.] significa que n??o sabe o local!)" type='text' placeholder={local} rightSection={LocalInfoCircle}
                    onBlur={handleLocal} />

                <hr />

                <TextInput label="URL da P??gina do V??deo" description="URL ?? o link da p??gina do v??deo. Fica no topo do seu navegador, come??ando com www e terminando com .com.br. Ex: https://www.youtube.com/watch?v=CCuR_KWjgUk" type='text' placeholder={url} onBlur={handleUrl} required />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualiza????o" description="O dia que voc?? encontrou o material. Ex: 12." type='text' placeholder={dayAcess} onBlur={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Visualiza????o
                            <small>O m??s que voc?? encontrou o material.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthVisualization}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualiza????o" description="O ano que voc?? encontrou o material. Ex: 2022." type='text' placeholder={yearAcess} onBlur={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>

                    <Grid.Col span={12}>
                        <TextInput label="Ano de Publica????o" description="Ano em que foi escrita, redigida, editada ou postada. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    /*
    //REF 32 - filme
    else if (auxRef === '32') {

        // INFO
        const AuthorFirstInfoCircle = (
            <Tooltip label='Escreva o primeiro nome nessa se????o. Ex: Ana.' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );
        const AuthorSurInfoCircle = (
            <Tooltip label='Escreva o sobrenome nessa se????o. Ex: Sousa.' position='top' placement="center" withArrow arrowSize={3}>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );
        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setNameAuthor1,
                e.target.value
            });
        }
        const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({

                setSurAuthor1,
                e.target.value
            });
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setTitle,
                e.target.value
            });
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setSubtitle,
                e.target.value
            });
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setUrl,
                e.target.value
            });
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setDayAcess,
                e.target.value
            });
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch({
                setMonthAcess,
                e.target.value
            });
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setYearAcess,
                e.target.value
            });
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setDayPublic,
                e.target.value
            });
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch({
                setMonthPublic,
                e.target.value
            });
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setYearPublic,
                e.target.value
            });
        }
        inputHtml = (
            <C.Container>

                <TextInput label="Nome do Autor(a) da Mat??ria" description="O primeiro nome do autor(a) vai nessa se????o" type='text' rightSection={AuthorFirstInfoCircle} placeholder='Ex: Clara' onBlur={handleNameAuthor1} />

                <hr />
                <TextInput label="Sobrenome do Autor(a) da Mat??ria" description="O primeiro nome do autor(a) vai nessa se????o" type='text' rightSection={AuthorSurInfoCircle} placeholder='Ex: Paiva' onBlur={handleSurAuthor1} />

                <hr />

                <TextInput label="T??tulo da Mat??ria" description="Titulo da Mat??ria. Geralmente o nome com grande destaque na p??gina." type='text' placeholder='Exemplo do T??tulo: Clarice Lispector: Vida e Obra da Escritora'
                    onBlur={handleTitle} />

                <hr />

                <TextInput label="Subt??tulo da Mat??ria" description="Geralmente a segunda frase em destaques, logo abaixo ao t??tulo." type='text' placeholder='Ex: Saiba a hist??ria da autora enigm??tica que completaria 100 anos em 2020'
                    onBlur={handleSubtitle} />

                <hr />

                <TextInput label="URL da P??gina da Mat??ria" description="URL ?? o link da p??gina da mat??ria. Fica no topo do seu navegador, come??ando com www e terminando com .com.br" type='text' placeholder='Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/' onBlur={handleUrl} />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualiza????o" description="O dia que voc?? encontrou o material." type='text' placeholder='25' onBlur={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Visualiza????o
                            <small>O m??s que voc?? encontrou o material.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthVisualization}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualiza????o" description="O ano que voc?? encontrou o material." type='text' placeholder='2022' onBlur={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publica????o" description="Pode n??o ser poss??vel saber o dia. Caso seja essa sua situa????o, apenas deixe em branco. " type='text' placeholder='12' onBlur={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Publica????o
                            <small>O m??s que foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthPublic}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publica????o" description="Ano em que foi escrita, redigida, editada ou postada." type='text' placeholder='2020' onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }
    */

    /*
    //REF 33 - musica
    else if (auxRef === '33') {

        // INFO
        const AuthorFirstInfoCircle = (
            <Tooltip label='Escreva o primeiro nome nessa se????o. Ex: Ana.' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );
        const AuthorSurInfoCircle = (
            <Tooltip label='Escreva o sobrenome nessa se????o. Ex: Sousa.' position='top' placement="center" withArrow arrowSize={3}>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );
        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setNameAuthor1,
                e.target.value
            });
        }
        const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({

                setSurAuthor1,
                e.target.value
            });
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setTitle,
                e.target.value
            });
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setSubtitle,
                e.target.value
            });
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setUrl,
                e.target.value
            });
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setDayAcess,
                e.target.value
            });
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch({
                setMonthAcess,
                e.target.value
            });
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setYearAcess,
                e.target.value
            });
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setDayPublic,
                e.target.value
            });
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch({
                setMonthPublic,
                e.target.value
            });
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setYearPublic,
                e.target.value
            });
        }
        inputHtml = (
            <C.Container>

                <TextInput label="Nome do Autor(a) da Mat??ria" description="O primeiro nome do autor(a) vai nessa se????o" type='text' rightSection={AuthorFirstInfoCircle} placeholder='Ex: Clara' onBlur={handleNameAuthor1} />

                <hr />
                <TextInput label="Sobrenome do Autor(a) da Mat??ria" description="O primeiro nome do autor(a) vai nessa se????o" type='text' rightSection={AuthorSurInfoCircle} placeholder='Ex: Paiva' onBlur={handleSurAuthor1} />

                <hr />

                <TextInput label="T??tulo da Mat??ria" description="Titulo da Mat??ria. Geralmente o nome com grande destaque na p??gina." type='text' placeholder='Exemplo do T??tulo: Clarice Lispector: Vida e Obra da Escritora'
                    onBlur={handleTitle} />

                <hr />

                <TextInput label="Subt??tulo da Mat??ria" description="Geralmente a segunda frase em destaques, logo abaixo ao t??tulo." type='text' placeholder='Ex: Saiba a hist??ria da autora enigm??tica que completaria 100 anos em 2020'
                    onBlur={handleSubtitle} />

                <hr />

                <TextInput label="URL da P??gina da Mat??ria" description="URL ?? o link da p??gina da mat??ria. Fica no topo do seu navegador, come??ando com www e terminando com .com.br" type='text' placeholder='Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/' onBlur={handleUrl} />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualiza????o" description="O dia que voc?? encontrou o material." type='text' placeholder='25' onBlur={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Visualiza????o
                            <small>O m??s que voc?? encontrou o material.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthVisualization}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualiza????o" description="O ano que voc?? encontrou o material." type='text' placeholder='2022' onBlur={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publicac??o" description="Dia da publica????o. " type='text' placeholder='12' onBlur={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Publica????o
                            <small>O m??s que foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthPubli}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publica????o" description="Ano em que foi escrita, redigida, editada ou postada." type='text' placeholder='2020' onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }
    */

    //REF 41 - entrevista
    else if (auxRef === '41') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNameAuthor1(
                    e.target.value
                ));
        }
        const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(

                setSurAuthor1(
                    e.target.value
                ));
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSubtitle(
                    e.target.value
                ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }
        const handleMagazine = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setMagazine(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Nome do(a) autor(a) da reportagem" description="O primeiro nome do(a) autor(a) da reportagem vai nessa se????o. Ex: Clara." type='text' placeholder={nameAuthor1} onBlur={handleNameAuthor1} required />

                <hr />

                <TextInput label="Sobrenome do(a) autor(a) da reportagem" description="O sobrenome do(a) autor(a) da reportagem vai nessa se????o. Ex: Paiva." type='text' placeholder={surAuthor1} onBlur={handleSurAuthor1} required />

                <hr />

                <TextInput label="T??tulo da Reportagem" description="Titulo da Reportagem. Geralmente o nome que aborda o assunto da reportagem. Ex: Sem cura e com tratamento caro, autismo ?? desafio para pais e institui????es sociais" type='text' placeholder={title}
                    onBlur={handleTitle} required />

                <hr />

                <TextInput label="Nome do Veiculo onde passou a Reportagem" description="Nome da Empresa ou Canal onde a reportagem foi publicada. Ex: Globo, GloboPlay, SBT, etc." type='text' placeholder={magazine}
                    onBlur={handleMagazine} required />

                <hr />

                <TextInput label="Cidade onde a Entrevista foi feita" description="Escreva a cidade onde a entrevista foi publicada. Ex: S??o Paulo. Se n??o souber, n??o precisa preencher nada. ([S.I.] significa que n??o sabe o local!)" type='text' placeholder={local} rightSection={LocalInfoCircle} onBlur={handleLocal} required />

                <hr />

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publica????o da Reportagem" description="Dia da publica????o. Ex: 12." type='text' placeholder={dayPublic} onBlur={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Publica????o da Reportagem
                            <small>O m??s que a reportagem foi feita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthPubli}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publica????o da Reportagem" description="Ano em que a reportagem foi escrita, editada ou postada. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }


    //REF 42 - entrevista revista
    else if (auxRef === '42') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNameAuthor1(
                    e.target.value
                ));
        }
        const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(

                setSurAuthor1(
                    e.target.value
                ));
        };
        const handleNameAuthor2 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNameAuthor2(
                    e.target.value
                ));
        }
        const handleSurAuthor2 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(

                setSurAuthor2(
                    e.target.value
                ));
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleMagazine = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setMagazine(
                    e.target.value
                ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ))
        }
        const handleNumberMagaz = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNumberMagaz(
                    e.target.value
                ))
        }
        inputHtml = (
            <C.Container>

                <TextInput label="Primeiro nome de quem foi Entrevistado(a)" description="O primeiro nome do Entrevistado(a) vai nessa se????o. Ex: Clara." type='text' placeholder={nameAuthor1} onBlur={handleNameAuthor1} required />

                <hr />

                <TextInput label="Sobrenome de quem foi Entrevistado(a)" description="O sobrenome do Entrevistado(a) vai nessa se????o. Ex: Paiva." type='text' placeholder={surAuthor1} onBlur={handleSurAuthor1} required />

                <hr />

                <TextInput label="T??tulo da Entrevista" description="Titulo da Entrevista. Geralmente o nome que aborda o assunto da entrevista. Exemplo do T??tulo: Vida e Obra da Clarice Lispector." type='text' placeholder={title}
                    onBlur={handleTitle} required />

                <hr />

                <TextInput label="Primeiro nome do Entrevistador(a)" description="O primeiro nome do Entrevistado(a) vai nessa se????o. Ex: Jo??o." type='text' placeholder={nameAuthor2} onBlur={handleNameAuthor2} required />

                <hr />

                <TextInput label="Sobrenome do Entrevistador(a)" description="O sobrenome do Entrevistado(a) vai nessa se????o. Ex: Ferraz Silveira." type='text' placeholder={surAuthor2} onBlur={handleSurAuthor2} required />

                <hr />

                <TextInput label="Nome da Revista ou Jornal" description="Nome da Revista/Jornal onde a entrevista foi publicada. Ex: Veja, O Estado de S??o Paulo." type='text' placeholder={magazine}
                    onBlur={handleMagazine} required />

                <hr />

                <TextInput label="Lugar onde a Entrevista foi publicada" description="Escreva a cidade onde a entrevista foi publicada. Ex: S??o Paulo.Se n??o souber, n??o precisa preencher nada. ([S.I.] significa que n??o sabe o local!)" type='text' placeholder={local} rightSection={LocalInfoCircle} onBlur={handleLocal} />

                <hr />

                <TextInput label="N??mero do Exemplar da Revista" description="N??mero do Exemplar da Revista onde a entrevista foi publicada. Aten????o: Apenas N??meros. Aten????o: Ex: 1721." type='text' placeholder={numberMagaz} onBlur={handleNumberMagaz} />

                <hr />

                <TextInput label="Intervalo entre P??ginas da Entrevista" description="Escreva de qual p??gina come??a e qual termina a entrevista. Aten????o: Apenas N??meros. Ex: 31 - 34." type='text' placeholder={paginationBook} onBlur={handlePaginationBook} required />

                <hr />

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publica????o" description="Dia da publica????o. Ex: 12. " type='text' placeholder={dayPublic} onBlur={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Publica????o
                            <small>O m??s que foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthPubli}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publica????o" description="Ano em que foi escrita, redigida, editada ou postada. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 43 - artigo de revista
    else if (auxRef === '43') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNameAuthor1(
                    e.target.value
                ));
        }
        const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSurAuthor1(
                    e.target.value
                ));
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }

        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ))
        }
        const handleNumberMagaz = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNumberMagaz(
                    e.target.value
                ))
        }
        const handleMagazine = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setMagazine(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Nome de quem fez o Artigo" description="O primeiro nome de quem fez o artigo vai nessa se????o. Ex: Clara." type='text' placeholder={nameAuthor1} onBlur={handleNameAuthor1} required />

                <hr />

                <TextInput label="Sobrenome de quem fez o Artigo" description="O sobrenome de quem fez o artigo vai nessa se????o. Ex: Paiva." type='text' placeholder={surAuthor1} onBlur={handleSurAuthor1} required />

                <hr />

                <TextInput label="T??tulo do Artigo" description="Titulo do Artigo. Geralmente o nome que aborda o assunto do artigo. Ex: A reinven????o de Hollywood: cinema americano e produ????o de subjetividade nas sociedades de controle." type='text' placeholder={title} onBlur={handleTitle} required />

                <hr />

                <TextInput label="Nome do Meio Veiculador" description="Nome de onde o artigo foi publicada. Ex: Veja, Estad??o, etc." type='text' placeholder={magazine}
                    onBlur={handleMagazine} required />

                <hr />

                <TextInput label="Lugar de onde o artigo foi publicada" description="Escreva a cidade onde a entrevista foi publicada. Ex: S??o Paulo. Se n??o souber, n??o precisa preencher nada. ([S.I.] significa que n??o sabe o local!)" type='text' placeholder={local} rightSection={LocalInfoCircle} onBlur={handleLocal} />

                <hr />

                <TextInput label="N??mero do Exemplar da Revista/jornal" description="N??mero do Exemplar da Revista ou Jornal onde o artigo foi publicado. Aten????o: Apenas N??meros. Ex: 1721" type='text' placeholder={numberMagaz} onBlur={handleNumberMagaz} required />

                <hr />

                <TextInput label="Intervalo entre P??ginas do Artigo" description="Escreva de qual p??gina come??a e qual termina o artigo. Aten????o: Apenas N??meros. Ex: 31 - 34." type='text' placeholder={paginationBook} onBlur={handlePaginationBook} required />

                <hr />

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publica????o" description="Dia da publica????o.Ex: 12." type='text' placeholder={dayPublic} onBlur={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Publica????o
                            <small>O m??s que foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthPubli}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publica????o" description="Ano em que foi escrita, redigida, editada ou postada. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 44 - artigo de internet
    else if (auxRef === '44') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNameAuthor1(
                    e.target.value
                ));
        }
        const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSurAuthor1(
                    e.target.value
                ));
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }
        const handleMagazine = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setMagazine(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Nome de quem fez o Artigo" description="O primeiro nome de quem fez o artigo vai nessa se????o. Ex: Clara." type='text' placeholder={nameAuthor1} onBlur={handleNameAuthor1} required />

                <hr />

                <TextInput label="Sobrenome de quem fez o Artigo" description="O sobrenome de quem fez o artigo vai nessa se????o. Ex: Paiva" type='text' placeholder={surAuthor1} onBlur={handleSurAuthor1} required />

                <hr />

                <TextInput label="T??tulo do Artigo" description="Titulo do Artigo. Geralmente o nome que aborda o assunto do artigo. Ex: A reinven????o de Hollywood: cinema americano e produ????o de subjetividade nas sociedades de controle." type='text' placeholder={title} onBlur={handleTitle} required />

                <hr />

                <TextInput label="Nome do Meio Veiculador" description="Nome do site onde o artigo foi publicada. Ex: G1, R7, etc." type='text' placeholder={magazine}
                    onBlur={handleMagazine} required />

                <hr />

                <TextInput label="Lugar de onde o artigo foi publicada" description="Escreva a cidade onde a entrevista foi publicada. Ex: S??o Paulo.Se n??o souber, n??o precisa preencher nada. ([S.I.] significa que n??o sabe o local!)" type='text' placeholder={local} rightSection={LocalInfoCircle} onBlur={handleLocal} />

                <hr />

                <TextInput label="URL do Site do Artigo" description="URL ?? o link da p??gina da tese. Fica no topo do seu navegador. Ex: http://www.contemporanea.uerj.br/pdf/ed_03/contemporanea_n03_02_butcher.pdf" type='text' placeholder={url} onBlur={handleUrl} required />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualiza????o" description="O dia que voc?? encontrou o material. Ex: 12." type='text' placeholder={dayAcess} onBlur={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Visualiza????o
                            <small>O m??s que voc?? encontrou o material.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthVisualization}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualiza????o" description="O ano que voc?? encontrou o material. Ex: 2022." type='text' placeholder={yearAcess} onBlur={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publica????o" description="Dia da publica????o. Ex: 12." type='text' placeholder={dayPublic} onBlur={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Publica????o
                            <small>O m??s que foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthPubli}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publica????o" description="Ano em que foi escrita, redigida, editada ou postada. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 51 - tese
    else if (auxRef === '51') {

        // INFO

        //Handles
        const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNameAuthor1(
                    e.target.value
                ));
        }
        const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(

                setSurAuthor1(
                    e.target.value
                ));
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ));
        }
        const handleUniDegreed = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUniDegreed(
                    e.target.value
                ));
        }
        const handleUniversity = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUniversity(
                    e.target.value
                ));
        }

        inputHtml = (
            <C.Container>

                <AuxAuthor />

                <hr />

                <TextInput label="T??tulo da Tese" description="Titulo da Tese. O assunto principal da tese. Ex: Possibilidades de Automa????o com IoT" type='text' placeholder={title} onBlur={handleTitle} required />

                <hr />

                <TextInput label="Total de P??ginas da Tese" description="N??mero do total de p??ginas da tese. Aten????o: Apenas N??meros! Ex: 83" type='text' placeholder={paginationBook} onBlur={handlePaginationBook} required />

                <hr />

                <TextInput label="Grau de quem fez a Tese" description="Grau em que a pessoa que fez a tese estav??. Ex: Mestrado em Engenharia de An??lise de Dados" type='text' placeholder={uniDegreed} onBlur={handleUniDegreed} required />

                <hr />

                <TextInput label="Institui????o a que a Tese foi Apresentada" description="Nome da institui????o que recebeu a tese. Ex: Universidade de S??o Paulo." type='text' placeholder={university} onBlur={handleUniversity} required />

                <hr />

                <Grid className='datePublic'>

                    <Grid.Col span={12}>
                        <TextInput label="Ano de Entrega da Tese" description="Ano em que a tese foi entregue. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 52 - dissertacao
    else if (auxRef === '52') {

        // INFO
        const AuthorFirstInfoCircle = (
            <Tooltip label='Escreva o primeiro nome nessa se????o. Ex: Ana.' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );
        const AuthorSurInfoCircle = (
            <Tooltip label='Escreva o sobrenome nessa se????o. Ex: Sousa.' position='top' placement="center" withArrow arrowSize={3}>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );
        const LocalInfoCircle = (
            <Tooltip label='Se n??o souber, deixe em branco. Caso tenha uma ideia de onde ?? mas n??o exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNameAuthor1(
                    e.target.value
                ));
        }
        const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(

                setSurAuthor1(
                    e.target.value
                ));
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ));
        }
        const handleUniDegreed = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUniDegreed(
                    e.target.value
                ));
        }
        const handleUniversity = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUniversity(
                    e.target.value
                ));
        }

        inputHtml = (
            <C.Container>

                <AuxAuthor />

                <hr />

                <TextInput label="T??tulo da Tese" description="Titulo da Tese. O assunto principal da tese. Ex: Possibilidades de Automa????o com IoT." type='text' placeholder={title} onBlur={handleTitle} required />

                <hr />

                <TextInput label="Total de P??ginas da Tese" description="N??mero do total de p??ginas da tese. Aten????o: Apenas N??meros! Ex: 83." type='text' placeholder={paginationBook} onBlur={handlePaginationBook} required />

                <hr />

                <TextInput label="Grau e curso de quem fez a Tese" description="Grau em que a pessoa que fez a tese estav??. Ex: Mestrado em Engenharia de An??lise de Dados." type='text' placeholder={uniDegreed} onBlur={handleUniDegreed} required />

                <hr />

                <TextInput label="Institui????o a que a Tese foi Apresentada" description="Nome da institui????o que recebeu a tese. Ex: Universidade de S??o Paulo." type='text' placeholder={university} onBlur={handleUniversity} required />

                <hr />

                <Grid className='datePublic'>

                    <Grid.Col span={12}>
                        <TextInput label="Ano de Entrega da Tese" description="Ano em que a tese foi entregue. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 53 - tese internet
    else if (auxRef === '53') {

        // INFO

        //Handles
        const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNameAuthor1(
                    e.target.value
                ));
        }
        const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(

                setSurAuthor1(
                    e.target.value
                ));
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ));
        }
        const handleUniDegreed = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUniDegreed(
                    e.target.value
                ));
        }
        const handleUniversity = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUniversity(
                    e.target.value
                ));
        }

        inputHtml = (
            <C.Container>

                <AuxAuthor />

                <hr />

                <TextInput label="T??tulo da Tese" description="Titulo da Tese. O assunto principal da tese. Ex: Possibilidades de Automa????o com IoT." type='text' placeholder={title} onBlur={handleTitle} required />

                <hr />

                <TextInput label="Total de P??ginas da Tese" description="N??mero do total de p??ginas da tese. Aten????o: Apenas N??meros! Ex: 83" type='text' placeholder={paginationBook} onBlur={handlePaginationBook} required />

                <hr />

                <TextInput label="Grau e curso de quem fez a Tese" description="Grau em que a pessoa que fez a tese estav??. Ex: Mestrado em Engenharia de An??lise de Dados." type='text' placeholder={uniDegreed} onBlur={handleUniDegreed} required />

                <hr />

                <TextInput label="Institui????o a que a Tese foi Apresentada" description="Nome da institui????o que recebeu a tese. Ex: Universidade de S??o Paulo." type='text' placeholder={university} onBlur={handleUniversity} required />

                <hr />

                <TextInput label="URL do Site da Tese" description="URL ?? o link da p??gina da tese. Fica no topo do seu navegador, come??ando com www e terminando com .com.br. Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/" type='text' placeholder={url} onBlur={handleUrl} required />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualiza????o da Tese" description="O dia que voc?? encontrou a tese. Ex: 12." type='text' placeholder={dayAcess} onBlur={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">M??s da Visualiza????o da Tese
                            <small>O m??s que voc?? encontrou a tese.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onBlur={handleMonthVisualization}>
                                <option value="" disabled selected>M??s</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Mar??o</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualiza????o da Tese" description="O ano que voc?? encontrou a tese. Ex: 2022." type='text' placeholder={yearAcess} onBlur={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>

                    <Grid.Col span={12}>
                        <TextInput label="Ano de Entrega da Tese" description="Ano em que a tese foi entregue. Ex: 2022." type='text' placeholder={yearPublic} onBlur={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }
    else {
        return (
            <div className='divWarning'>
                <h1 className='h1Warning'>Ops!</h1>
                <h2 className='h2Warning'>Parece que n??o sabemos o tipo de sua refer??ncia!</h2>
                <p className='pWarning'>Volte para a tela inicial e selecione o tipo.</p>
            </div>
        )
    }

    return inputHtml;
}

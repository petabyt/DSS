#ifndef RAWDDPSETTINGS_H
#define RAWDDPSETTINGS_H

#include <QDialog>
#include "RawFilesTab.h"
#include "FitsFilesTab.h"

namespace Ui {
class RawDDPSettings;
}

class RawDDPSettings : public QDialog
{
    Q_OBJECT

public:
    explicit RawDDPSettings(QWidget *parent = nullptr);
    ~RawDDPSettings();

private:
    Ui::RawDDPSettings *ui;
    RawFilesTab *m_RawFilesTab;
    FitsFilesTab *m_FitsFilesTab;
};

#endif // RAWDDPSETTINGS_H
